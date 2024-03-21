import { z } from "zod";

export const assetsAllRequest = z.strictObject({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type AssetsAllRequest = z.infer<typeof assetsAllRequest>;

export const assetsAllResponse = z.strictObject({
  cursor: z.string(),
  assets: z.array(
    z.strictObject({
      id: z.number(),
      filename: z.string(),
      tags: z.string(),
      description: z.string(),
      alt_attribute: z.string(),
      asset_code: z.string(),
      mimetype: z.string(),
      size: z.number(),
      target_url: z.string(),
      created_at: z.number(),
    }),
  ),
});

export type AssetsAllResponse = z.infer<typeof assetsAllResponse>;
