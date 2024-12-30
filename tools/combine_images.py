import os
import re
import hashlib
from PIL import Image

def download_image(url, cache_dir='tools/image_cache'):
    # 创建缓存目录
    os.makedirs(cache_dir, exist_ok=True)
    
    # 生成唯一的缓存文件名
    filename = hashlib.md5(url.encode()).hexdigest() + '.jpg'
    cache_path = os.path.join(cache_dir, filename)
    
    # 如果缓存文件已存在，直接返回路径
    if os.path.exists(cache_path):
        return cache_path
        
    # 下载图片并保存到缓存目录
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(cache_path, 'wb') as f:
            f.write(response.content)
        return cache_path
    except requests.exceptions.RequestException as e:
        print(f"无法下载图片 {url}: {e}")
        return None

def extract_image_from_md(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 查找"开篇图"二级标题下的第一个图片
    pattern = r'## 开篇图[^#]*!\[.*?\]\((.*?)\)'
    match = re.search(pattern, content)
    if match:
        img_path = match.group(1)
        # 如果路径以http开头，直接返回
        if img_path.startswith('http'):
            # 确保URL格式正确
            if img_path.startswith('https:/') and not img_path.startswith('https://'):
                return img_path.replace('https:/', 'https://')
            if img_path.startswith('http:/') and not img_path.startswith('http://'):
                return img_path.replace('http:/', 'http://')
            return img_path
        # 否则转换为绝对路径
        return os.path.join(os.path.dirname(file_path), img_path)
    return None

import requests
from io import BytesIO

def combine_images(image_paths, output_path, aspect_ratio=(16, 9)):
    images = []
    for img_path in image_paths:
        if img_path is None:
            continue
        if img_path.startswith('http'):
            # 下载远程图片到本地缓存
            cached_path = download_image(img_path)
            if cached_path is None:
                continue
            img_path = cached_path
        
        # 打开本地图片
        img = Image.open(img_path)
        # 调整图片尺寸为1920x1080 (16:9)
        img = img.resize((1920, 1080), Image.Resampling.LANCZOS)
        images.append(img)
    
    # 设置网格布局参数
    cols = 6
    rows = 5
    img_width = 1920
    img_height = 1080
    
    # 计算总宽度和高度
    total_width = img_width * cols
    total_height = img_height * rows
    
    # 创建新图片
    combined = Image.new('RGB', (total_width, total_height))
    
    # 按网格顺序排列图片
    for i, img in enumerate(images):
        # 确保图片尺寸为1920x1080
        img = img.resize((img_width, img_height), Image.Resampling.LANCZOS)
        # 计算图片位置
        col = i % cols
        row = i // cols
        x = col * img_width
        y = row * img_height
        combined.paste(img, (x, y))
    
    # 保存结果
    combined.save(output_path)

def main():
    # 获取md文件路径并按数字排序
    md_dir = 'docs/content/2024'
    md_files = sorted(
        [os.path.join(md_dir, f) for f in os.listdir(md_dir) if f.endswith('.md')],
        key=lambda x: int(os.path.basename(x).split('.')[0])
    )
    
    # 提取图片路径
    image_paths = [extract_image_from_md(f) for f in md_files]
    
    # 拼接图片并保存
    output_path = 'tools/combined_image.jpg'
    combine_images(image_paths, output_path)
    print(f"图片已成功拼接并保存到 {output_path}")

if __name__ == '__main__':
    main()
