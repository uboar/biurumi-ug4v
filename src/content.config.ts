import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
  loader: glob({ pattern: 'topics.md', base: './src/content' }),
  schema: z.object({
    items: z.array(
      z.object({
        dateLabel: z.string(),
        datetime: z.string(),
        text: z.string(),
        link: z.string().optional(),
        draft: z.boolean().optional(),
      }),
    ),
  }),
});

export const collections = {
  topics,
};
