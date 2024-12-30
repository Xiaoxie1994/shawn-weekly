from wordcloud import WordCloud
import matplotlib.pyplot as plt

def read_keywords(file_path):
    keywords = {}
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            if '-' in line:
                keyword, weight = line.strip().rsplit('-', 1)
                try:
                    keywords[keyword] = int(weight)
                except ValueError:
                    continue
    return keywords

def generate_wordcloud(keywords):
    wordcloud = WordCloud(
        width=1600,
        height=800,
        background_color='white',
        max_words=100,
        colormap='Paired',
        font_path='/System/Library/Fonts/Supplemental/Songti.ttc',  # macOS系统字体
        prefer_horizontal=0.9,
        min_font_size=8,
        max_font_size=300,
        relative_scaling=0.3
    ).generate_from_frequencies(keywords)
    
    plt.figure(figsize=(20, 10), dpi=600)
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.savefig('tools/wordcloud.png', bbox_inches='tight', dpi=600)
    plt.close()

if __name__ == '__main__':
    keywords = read_keywords('tools/2024-keyword.txt')
    generate_wordcloud(keywords)
