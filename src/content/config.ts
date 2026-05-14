import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    lang: z.enum(['no', 'sv', 'en']).default('no'),
    featured: z.boolean().default(false),
    author: z.string().default('Redaksjonen'),
  }),
});

export const collections = { articles };
