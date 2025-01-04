import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

export async function GET(context) {
  const blog = await getCollection('blog');
  const moments = await getCollection('moments');

  return rss({
    title: 'Dev Portfolio',
    description: 'A developer\'s journey through code and life',
    site: context.site,
    items: [
      ...blog.map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.excerpt,
        link: `/blog/${post.slug}/`,
      })),
      ...moments.map((moment) => ({
        title: 'Moment',
        pubDate: new Date(moment.data.date),
        description: moment.data.content,
        link: `/moments/${moment.slug}/`,
      }))
    ],
    customData: `<language>en-us</language>`,
  });
}