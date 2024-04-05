import { z } from "zod";
import { AssetId } from "../entities";

export const assetsHistoryRequest = z.strictObject({
  id: z
    .number()
    .positive()
    .int()
    .transform((x) => x as AssetId),
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type AssetsHistoryRequest = z.infer<typeof assetsHistoryRequest>;

export const assetsHistoryResponse = z.strictObject({
  cursor: z.string(),
  history: z.array(
    z.strictObject({
      filename: z.string().optional(),
      tags: z.string().optional(),
      description: z.string().optional(),
      alt_attribute: z.string().optional(),
      file: z.string().optional(),
      mimetype: z.string().optional(),
      size: z.number().optional(),
      target_url: z.string().optional(),
      created_at: z.number(),
    }),
  ),
});

export type AssetsHistoryResponse = z.infer<typeof assetsHistoryResponse>;
