import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z
        .string()
        .array()
        .transform((tags: any[]) => tags.map((tag) => `${tag}`)),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      planned: z.boolean().default(false),
      seriesId: z.string().optional(),
      orderInSeries: z.number().optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val: string | number | Date) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str: string | number | Date) => (str ? new Date(str) : undefined)),
      cover: z.string()
        .optional(),
      coverAlt: z.string().optional(),
      citations: z.object({
        author: z.string(),
        title: z.string(),
        url: z.string(),
        date: z.date().optional(),
        accessed: z.date().optional(),
      }).array().optional(),
    }),
});

const series = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, series };

