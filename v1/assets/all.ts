import { z } from "zod";

export const assetsAllRequest = z.object({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type AssetsAllRequest = z.infer<typeof assetsAllRequest>;

export const assetsAllResponse = z.object({
  cursor: z.string(),
  assets: z.array(
    z.object({
      id: z.number(),
      filename: z.string(),
      tags: z.string(),
      description: z.string(),
      alt_attribute: z.string(),
      assetCode: z.string(),
      mimetype: z.string(),
      size: z.number(),
      target_url: z.string(),
      created_at: z.number(),
    }),
  ),
});

export type AssetsAllResponse = z.infer<typeof assetsAllResponse>;