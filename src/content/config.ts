import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional()
  })
});

const momentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    content: z.string()
  })
});

export const collections = {
  'blog': blogCollection,
  'moments': momentsCollection
};