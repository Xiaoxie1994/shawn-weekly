<template><div><h1 id="肖恩技术周刊-第-3-期-基于-智能体-创造自发展的冒险镇" tabindex="-1"><a class="header-anchor" href="#肖恩技术周刊-第-3-期-基于-智能体-创造自发展的冒险镇"><span>肖恩技术周刊（第 3 期）：基于“智能体”创造自发展的冒险镇</span></a></h1>
<blockquote>
<p><strong>周刊内容</strong>: 对一周内阅读的资讯或技术内容精品（个人向）进行总结，分类大致包含“业界资讯”、“技术博客”、“开源项目”和“工具推荐”等。为减少阅读负担提高记忆留存率，每类下内容数一般不超过3条。<br>
<strong>更新时间</strong>: 周一<br>
<strong>历史收录</strong>: <a href="https://github.com/Xiaoxie1994/shawn-weekly" target="_blank" rel="noopener noreferrer">shawn-weekly</a> <br>
<strong>订阅方式</strong>: 微信公众号“<strong>肖恩聊技术</strong>”，除周刊外还有更多原创技术博文~<br>
<img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/20241103221454.png" alt="公众号二维码" width="300"></p>
</blockquote>
<h2 id="开篇图" tabindex="-1"><a class="header-anchor" href="#开篇图"><span>开篇图</span></a></h2>
<p><img src="@source/content/picture/intro-w25.png" alt="冒险村物语"></p>
<blockquote>
<p>图片为“冒险村物语2”游戏截图，玩的时候很上头，但可惜的是内容比较少持续可玩性不够。刚好最近智能体很火，去年也有“斯坦福小镇”构建了全智能体的虚拟世界，我这边萌生了一个扩展冒险村的想法，后续有进展再同步😁。</p>
</blockquote>
<h2 id="业界资讯" tabindex="-1"><a class="header-anchor" href="#业界资讯"><span>业界资讯</span></a></h2>
<ul>
<li><a href="http://www.mittrchina.com/news/detail/13420" target="_blank" rel="noopener noreferrer">苹果正式迈入人工智能时代，用户可通过Siri向ChatGPT提问，Vision Pro也将在中国上市</a></li>
</ul>
<blockquote>
<p>苹果公司在2024年全球开发者大会（WWDC）上宣布了其在人工智能领域的最新布局，推出了名为“苹果智能（Apple Intelligence）”的服务，并与OpenAI达成合作，将ChatGPT深度整合到苹果的产品和服务中。这标志着苹果正式迈入人工智能时代，希望在这一新领域确立领先地位。</p>
<p>“苹果智能”服务基于机器学习、大型语言模型和生成式人工智能技术，覆盖了通知管理、写作辅助、个性化头像生成、跨应用任务执行等多个应用场景。Siri也得到了升级，具备了“屏幕感知”能力，能够理解屏幕上的内容并采取行动。此外，苹果还推出了全新的Genmoji功能，允许用户根据文字描述定制专属的Emoji表情。</p>
<p>在隐私保护方面，苹果强调了设备端处理的重要性，并开发了“私有云计算”系统，只将任务所需的最小数据发送到服务器进行处理，处理完成后不会存储或用于模型训练。苹果承诺将公开服务器上运行的代码，允许独立专家审查，以确保其隐私承诺得到落实。</p>
<p>除了人工智能创新，苹果的多个操作系统也迎来了重大更新。iOS 18加入了主屏幕个性化功能，iPadOS 18带来了浮动标签栏、SharePlay远程共享等新功能，macOS Sequoia则支持自动窗口平铺、iPhone镜像等实用功能。此外，苹果头戴设备Vision Pro也迎来了新系统VisionOS 2，支持更多新手势和机器学习驱动的新功能。</p>
<p>苹果正在全面拥抱人工智能时代，凭借隐私保护和硬件优势，对“苹果智能”服务寄予厚望，希望它能成为行业新的人工智能应用基准。与OpenAI的合作也将为苹果生态系统注入强大的人工智能能力。我们拭目以待苹果在这个充满变革的领域，能否保持其在移动领域的领先地位。</p>
</blockquote>
<ul>
<li><a href="https://www.infoq.cn/article/TP67w8oHSQzVFyhyVt2m" target="_blank" rel="noopener noreferrer">React 19 差点拖慢整个互联网！核心团队紧急叫停</a></li>
</ul>
<blockquote>
<p>React 19 RC版本的发布原本是前端开发社区的一大盛事，它带来了许多新特性和改进，例如新的“use”API、带新钩子的Actions、稳定服务器组件以及Server Actions等。然而，一个关于Suspense组件处理并行数据获取的小变化，却意外地引起了广泛的关注和担忧。这个变化可能导致许多依赖React的网站性能显著下降。</p>
<p>在React 18中，即使多个组件被放置在同一个Suspense边界内并各自执行数据获取，它们会并行触发查询，待所有查询解析完成后再显示整个子树。但在React 19中，查询似乎变成了瀑布流形式，即一个查询完成后才会启动下一个查询。这一变化在React文档的示例中也有所体现，但发布说明中对此仅有简短的提及。</p>
<p>这一改动不仅影响了性能，还对依赖该模式的开发者造成了冲击。例如，开发者Matias Gonzalez的测试显示，更新到React和Next的Canary测试版本后，.glb模型的加载时间从2.5秒增加到了3.5秒。React核心团队也承认了这一问题的存在。</p>
<p>React 19的这一变化与团队自18版本前引入的“边获取、边渲染”理念有关。理论上，我们应该避免在同一个组件中同时执行渲染和数据获取，而应该将数据获取提前。虽然这有助于优化性能，但也带来了开发体验上的问题，使得开发者难以将组件及其数据需求统一处理。</p>
<p>社区对此问题的讨论非常激烈，甚至有专门的库出现以解决这个问题。开发者Teemu Taskula指出，Suspense的主要优点之一是能够组合多个组件并让它们分别获取自己的数据，同时通过Suspense等待所有数据就绪，避免因加载指示器导致的“爆米花”式UI。</p>
<p>最终，在社区的强烈反馈和内部沟通后，React核心团队决定暂时叫停这项变更。Sophie Alpert表示，虽然团队非常关注单页应用（SPAs），但误判了人们对Suspense的依赖程度。她提出，理想的解决方案是进行一次重构，以便能够追踪多个正在加载的组件而无需额外的重新执行，从而获得两种方式的优势。</p>
<p>这件事也暴露了React社区与维护者之间在开发方向上的冲突，以及React长期以来缺乏与公众完全开放的沟通渠道的问题。开发者们呼吁React需要一个允许即时通信的平台，以覆盖服务不足的灰色地带，并为支持生态系统的声音/作者/维护者提供一个沟通的场所。</p>
</blockquote>
<ul>
<li><a href="https://mp.weixin.qq.com/s/kx3PO2i7vhhHsFA2p82Bqw" target="_blank" rel="noopener noreferrer">“OpenAI劲敌”Anthropic发布Claude 3.5——史上最强AI大模型、吊打GPT-4o、免费可用</a></li>
</ul>
<blockquote>
<p>Anthropic公司发布了其下一代旗舰AI大模型Claude 3.5 Sonnet，该模型在多个领域如研究生级推理能力、本科生级知识、编程能力以及视觉推理任务中均设立了新的行业标准。Claude 3.5 Sonnet在性能上超越了GPT-4o和谷歌的Gemini 1.5 Pro，并且能更好地理解复杂指令，解读图表图形等视觉推理能力有明显提升。此外，其App处理速度是前代模型的两倍，成本仅为五分之一。Anthropic由OpenAI前研发高管创立，获得了谷歌、Salesforce和亚马逊的支持，并在过去一年完成了总额约73亿美元的五笔融资。Claude 3.5 Sonnet目前已在公司网站和移动应用中免费提供，订阅用户享有更高访问权限。同时，Anthropic还引入了“Artifacts”功能，扩展了用户与Claude的交互方式，有助于代码开发、法律合同起草和分析、商业报告撰写等。</p>
</blockquote>
<h2 id="技术博客" tabindex="-1"><a class="header-anchor" href="#技术博客"><span>技术博客</span></a></h2>
<ul>
<li><a href="https://my.oschina.net/u/4662964/blog/11188168" target="_blank" rel="noopener noreferrer">serverless 在点淘的质量保障实践</a></li>
</ul>
<blockquote>
<p>点淘作为试点项目，通过实施SERVERLESS架构，实现了研发域和运维域的独立迭代，有效降低了运维成本，提升了研发效率。在质量保障方面，点淘经历了功能回归、压力测试和监控验证等流程，重点关注了依赖梳理、性能验证和监控建设等问题。同时，SERVERLESS架构也带来了部署效率的提升，如应用部署时长显著下降。</p>
<ul>
<li>在功能回归方面，点淘通过接口反推、专家经验和依赖梳理，确保了大流量接口的覆盖和资损、环境依赖等关键场景的测试。同时，通过搭建独立测试环境和接口自动化测试，提高了回归测试的效率和覆盖率。</li>
<li>压力测试方面，点淘针对不同性能敏感度的应用，采取了不同的压测方式，如统一环境隔离、vipserver路由和灰度放量对比等，以验证新旧容器的性能表现。同时，通过调用数据的traceid验证流量是否到指定机器，降低了压测成本。</li>
<li>监控验证方面，点淘在serverless机器分组上进行了监控建设，重点关注了监控设置的合理性和有效性。通过混沌工程注入错误日志，验证了监控报警的及时性和准确性。</li>
<li>在问题分析方面，点淘记录了42个问题，其中3个与研发域上层应用升级相关。这些问题主要集中在对外部依赖的场景和监控系统数据统计等方面。随着经验的积累，运维域升级也变得越来越顺畅。</li>
</ul>
<p>总结来看，点淘在实施SERVERLESS架构的过程中，通过分层保障和环境依赖的梳理，提高了质量保障的效率。同时，通过基座插件化和分层自动化，进一步优化了测试成本和功能保障。展望未来，点淘预计通过这些措施，将普通应用升级的测试成本控制在0.5~1人日，实现更高效的质量保障。</p>
</blockquote>
<ul>
<li><a href="https://my.oschina.net/meituantech/blog/11048543" target="_blank" rel="noopener noreferrer">大众点评内容搜索算法优化的探索与实践</a></li>
</ul>
<blockquote>
<p>大众点评内容搜索算法的优化实践主要围绕提升用户体验和搜索满意度进行。美团技术团队通过深入分析用户需求和挑战，实施了一系列优化措施。首先，团队对内容供给进行了深入理解，包括显式标签和隐式表征，以充分理解海量用户生成内容。在召回环节，通过语义召回、个性化召回和策略召回，确保了搜索结果的相关性和个性化。排序环节则通过粗排和精排，结合多目标融合排序和异构混排技术，提高了排序的准确性和效率。</p>
<p>此外，团队还特别关注了满意度优化，通过自动化标注和多目标融合，提升了搜索结果的相关性、时效性和地域性。最终，通过异构混排技术，实现了内容与商户、团单等不同类型结果的有效融合，以满足用户的多元化需求。</p>
<p>这些优化措施不仅提升了内容搜索的用户体验，还促进了内容消费，吸引了更多用户转化为内容创作者，形成了良性循环。美团技术团队期望未来能够进一步利用大模型和自动化技术，提升搜索算法的时效性和性能，以在本地生活信息服务领域形成竞争优势。</p>
</blockquote>
<ul>
<li><a href="https://my.oschina.net/u/5783135/blog/11209054" target="_blank" rel="noopener noreferrer">浅析 Spring 中 Async 注解底层异步线程池原理</a></li>
</ul>
<blockquote>
<p>本文深入探讨了Spring框架中@Async注解的底层实现原理，特别是异步线程池的工作原理。首先，文章介绍了@Async注解的基本定义和使用方式，它允许开发者通过简单的注解在Spring应用中实现异步方法调用。接着，文章通过分析Spring源码，详细解释了@Async注解是如何通过AOP机制，利用AsyncAnnotationAdvisor和AsyncExecutionInterceptor来实现异步执行的。</p>
<p>在探究异步线程池的原理时，文章分析了获取线程池的主要流程，包括如何通过determineAsyncExecutor方法确定使用的线程池。文章还讨论了在没有指定自定义线程池的情况下，Spring是如何提供默认线程池的。特别指出了Spring容器在处理Executor类型时的特殊行为，即在没有明确指定线程池的情况下，Spring会根据@ConditionalOnMissingBean条件自动配置一个ThreadPoolTaskExecutor实例。</p>
<p>文章最后总结了Spring处理Async异步线程池的流程，并归纳了几种可能遇到的情况，包括使用Spring容器中唯一的TaskExecutor实例、创建具有特定参数的ThreadPoolTaskExecutor实例，以及在没有合适线程池时使用SimpleAsyncTaskExecutor的情况。这些情况都可能带来潜在的问题，如线程管理不当导致的性能下降或内存溢出。</p>
<p>通过深入分析，文章为读者提供了对Spring异步处理机制更深层次的理解，帮助开发者更合理地使用@Async注解，避免可能遇到的问题。</p>
</blockquote>
<h2 id="开源项目" tabindex="-1"><a class="header-anchor" href="#开源项目"><span>开源项目</span></a></h2>
<ul>
<li><a href="https://github.com/hpcaitech/Open-Sora" target="_blank" rel="noopener noreferrer">hpcaitech / Open-Sora</a></li>
</ul>
<blockquote>
<p>Open-Sora是一个致力于高效制作高质量视频的开源项目。它旨在通过提供模型、工具和所有细节，使先进的视频生成技术对所有人开放，同时提供一个简化复杂视频生成过程的流线型和用户友好的平台。Open-Sora鼓励创新、创造力和内容创作领域的包容性。</p>
</blockquote>
<ul>
<li><a href="https://github.com/iptv-org/iptv" target="_blank" rel="noopener noreferrer">iptv-org / iptv</a></li>
</ul>
<blockquote>
<p>提供了来自世界各地的公开可用的IPTV频道列表。这个项目由社区维护，旨在收集和分享免费的IPTV频道资源，方便用户能够通过IPTV服务观看电视节目和视频内容。用户可以根据自己的需求，选择合适的频道进行观看。由于IPTV技术允许通过互联网协议传输视频内容，因此这个项目为全球用户提供了一个便捷的方式来访问和享受电视节目。</p>
</blockquote>
<ul>
<li><a href="https://github.com/qianguyihao/Web" target="_blank" rel="noopener noreferrer">千古前端图文教程</a></li>
</ul>
<blockquote>
<p>前端开发教程资源库，它提供了从入门到进阶的超详细图文教程。这个知识库旨在帮助初学者从零开始学习前端技术，并逐步成长为一名技术精湛、风格优雅的前端工程师。它涵盖了前端开发所需的各种知识点，适合那些希望深入理解并掌握前端技能的开发者使用。</p>
</blockquote>
<h2 id="网站推荐" tabindex="-1"><a class="header-anchor" href="#网站推荐"><span>网站推荐</span></a></h2>
<ul>
<li><a href="https://indiehackertools.net/" target="_blank" rel="noopener noreferrer">独立开发者出海工具箱</a></li>
</ul>
<blockquote>
<p>独立开发者出海工具箱提供了多种资源和工具，旨在帮助开发者更高效地进行网站建设、推广、变现等。其中包括云端网站设计平台Webflow、全球VPS RackNerd、内置多种功能的ShipFast、SEO分析插件AITDK SEO Extension等。此外，还有灵感来源如V2EX和AI导航站，以及推广渠道1000UserGuide和中国独立开发者项目列表。变现方面，除了Google AdSense，还有AI生成壁纸工具站AI Wallpaper等精选模板。Logo制作、内容存储、AI开发资源、开发资源、域名购买、部署托管、SEO分析、支付方式和自媒体资讯等也一应俱全，为独立开发者提供了全方位的支持。</p>
<p>独立开发者出海工具箱还提供了多种效率工具，如沉浸式翻译、长截图插件GoFullPage和网站图标探测器，进一步提高开发者的工作效率。通过这些工具和资源，独立开发者可以更专注于产品开发和创新，加速出海进程。</p>
<p>总之，独立开发者出海工具箱为开发者提供了从建站、设计、推广、变现到效率提升的全方位支持，帮助他们更好地应对出海过程中的挑战，实现全球市场的拓展。</p>
</blockquote>
<h2 id="其他值得看" tabindex="-1"><a class="header-anchor" href="#其他值得看"><span>其他值得看</span></a></h2>
<ul>
<li><a href="https://news.cnblogs.com/n/771611/" target="_blank" rel="noopener noreferrer">睡眠不足正这样破坏你的记忆力，即使补觉也无法挽回</a></li>
</ul>
<blockquote>
<p>睡眠不足会显著影响记忆力，即使补觉也难以完全恢复记忆损失。研究发现，大脑在睡眠中通过尖波涟漪（sharp-wave ripples）将短期记忆转移到长期记忆。尖波涟漪由海马体发出，是神经元同步放电产生的高频脑波。睡眠不足会降低尖波涟漪的质量，导致记忆重放过程受损。实验显示，睡眠不足的大鼠神经元放电强度减弱，尖波涟漪混乱，且难以恢复记忆形成所需的激活模式。补觉虽能部分恢复尖波涟漪质量，但难以达到正常睡眠水平。此外，尖波涟漪在筛选记忆和预测未来活动方面发挥重要作用，睡眠不足可能削弱大脑对将来经历的反应能力。因此，考前熬夜学习可能对当天早些时候学到的信息记忆不利，强调了充足睡眠对记忆形成的重要性。</p>
</blockquote>
<ul>
<li><a href="https://www.ruanyifeng.com/blog/2024/06/weekly-issue-305.html" target="_blank" rel="noopener noreferrer">科技爱好者周刊（第 305 期）</a></li>
</ul>
<blockquote>
<p>深入探讨了生成真正随机数的难题。伪随机数由算法生成，相同的种子值将产生相同的结果，不适用于对随机性有高要求的场合。真随机数需满足不可预测、不重复、均匀分布的条件，通常只能通过硬件获得。Random.org和Cloudflare通过大气无线电波、熔岩灯、单摆等物理现象生成真随机数，但存在成本问题。</p>
<p>周刊还提到了即将举行的稀土开发者大会，涵盖了多个技术热点和前沿领域的70多场演讲。此外，报道了美国宇航局Starliner飞船的故障、澳大利亚发现的巨型鹅化石、眼球监控技术以及加沙地区的上网篮等科技动态。</p>
<p>文章部分讨论了AI芯片的未来、个人博客引擎的开发、CSS 3D效果、Spotify的随机歌单算法等技术话题。工具部分介绍了Postgres.js、OpenccLint、BiliVideoDown等开源项目。AI相关部分推荐了Luma AI Video Generator、Stable Diffusion 3等AI工具。资源部分则分享了Unicode知识、CSS加载动画定制等学习资料。</p>
<p>在言论部分，讨论了编程语言的发展、Excel世界锦标赛、宇宙年龄等话题。读者互动环节中，多位读者对随机数生成、AI技术、周刊内容等进行了讨论和建议。</p>
<p>周刊通过分享科技资讯、技术文章、工具资源等内容，为科技爱好者提供了丰富的知识盛宴。同时，鼓励读者参与讨论，共同探索科技的奥秘。</p>
</blockquote>
<ul>
<li><a href="https://quail.ink/op7418/p/aigc-weekly-76" target="_blank" rel="noopener noreferrer">AIGC Weekly #76</a></li>
</ul>
<blockquote>
<p>苹果公司在 WWDC24 上宣布 iOS 18 将深度整合 AI 功能，特别是 Siri 的全新设计和功能，以及新的写作和图像生成工具。Luma AI 发布了 Dream Machine 视频生成模型，提供高质量的视频生成能力。SD3 的 2B 模型开源，但存在一些问题，社区正在寻找解决方案。英伟达开源了 Nemotron-4 340B，这是目前规模最大的 LLM，旨在帮助开发人员训练数据。此外，报道还包括了 Open AI 的微调 API 更新、AI 产品推荐和精选文章，涵盖了从 AI 视频生成到文献研究工具的多个方面。最后，介绍了一些 AI 技术的创新应用和研究进展，如面部表情迁移技术和自动发现优化算法等。</p>
</blockquote>
</div></template>


