import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'
import { defineUserConfig } from 'vuepress'
import { cachePlugin } from '@vuepress/plugin-cache'
import { umamiAnalyticsPlugin } from '@vuepress/plugin-umami-analytics'
import fs from 'fs';
import path from 'path';

const generateContentSidebar = () => {
  const contentDir = 'docs/content';
  const sidebar = [];
  fs.readdirSync(contentDir).forEach(year => {
    if (fs.statSync(path.join(contentDir, year)).isDirectory() && year !== 'picture') {
      const yearSidebar = { text: year, prefix: `${year}/`, collapsible: true, children: [] };
      fs.readdirSync(path.join(contentDir, year)).forEach(file => {
        const filePath = path.join(contentDir, year, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const titleMatch = fileContent.match(/^#\s+(.*)$/m);
        let title = titleMatch ? titleMatch[1] : `第 ${path.basename(file, path.extname(file))} 期`;
        const shortTitleMatch = title.match(/技术周刊（第 (\d+) 期）：(.+)/);
        if (shortTitleMatch) {
          title = `第 ${shortTitleMatch[1]} 期：${shortTitleMatch[2]}`;
        }
        yearSidebar.children.push({ text: title, link: `${path.basename(file, path.extname(file))}.md` });
      });
      yearSidebar.children.sort((a, b) => {
        const numA = parseInt(a.text.match(/第 (\d+) 期/)[1], 10);
        const numB = parseInt(b.text.match(/第 (\d+) 期/)[1], 10);
        return numB - numA;
      });
      sidebar.push(yearSidebar);
    }
  });
  return sidebar;
};

export default defineUserConfig({
  bundler: viteBundler(),
  theme: hopeTheme({
    hostname: 'https://weekly.shawnxie.top',
    logo: 'https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/image-sjql.png',
    repo: 'https://github.com/Xiaoxie1994/shawn-weekly',
    editLink: false,
    subSidebar: 'auto',
    contributors: false,
    plugins: {
      feed: {
        hostname: 'https://weekly.shawnxie.top',
        rss: true,
        count: 100000,
        filter: (page) => page.path.startsWith('/content/2024/'),
        sorter: (pageA, pageB) => {
          const numA = parseInt(pageA.title.match(/第 (\d+) 期/)[1], 10);
          const numB = parseInt(pageB.title.match(/第 (\d+) 期/)[1], 10);
          return numB - numA;
        },
      },
      slimsearch: {
        indexContent: true,
        suggestion: true,
        locales: {
          '/': {
            placeholder: '搜索',
          }
        },
      }
    },
    navbar: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '目录',
        prefix: '/content/',
        children: generateContentSidebar(),
      },
      {
        text: '合集',
        prefix: '/collection/',
        children: [
          {
            text: '2024',
            link: '2024.md'
          }
        ],
      },
      {
        text: '订阅',
        link: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkwODY0ODQzOQ==&action=getalbum&album_id=3492416248238096386#wechat_redirect',
      },
    ],
    sidebar: {
      displayAllHeaders: false,
      '/': [
        {
          text: '主页',
          collapsible: true,
          link: '/'
        },
        {
          text: '合集',
          prefix:'collection/',
          collapsible: true,
          children: [
            {
              text: '2024年周刊合集（01期 - 30期）',
              link: '2024.md'
            }
          ],
        },
        {
          text: '周刊',
          prefix:'content/',
          collapsible: true,
          children: generateContentSidebar(),
        },
      ],
    },
  }),
  lang: 'zh-CN',
  title: '肖恩技术周刊',
  description: '记录有价值的技术内容',
  head: [
    [
      'link',{ rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/image-sjql.png' }
    ],
    [
      'meta',{ name: 'google-site-verification', content: 'rBr3QpOiV6jhzWBKMvyt2NUZOPlgtVBms1Fmq6u--1s' }
    ],
    [
      'meta',{ name: 'msvalidate.01', content: '2F1791A628BF53E1505F40AA9EBF45AD' }
    ]
  ],
  plugins: [
    umamiAnalyticsPlugin({
      id: '3b366c06-d035-411e-a013-8efbabbdad43',
      link: 'https://cloud.umami.is/script.js'
    }),
    cachePlugin({
      type: 'filesystem',
    }),
  ],
})
