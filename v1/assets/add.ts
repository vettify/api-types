import { z } from "zod";
import { fileRequest } from "../common/file_request";
import { AssetId } from "../entities";

export const assetsAddRequest = z.strictObject({
  filename: z.string(),
  file: fileRequest,
  tags: z.string(),
  description: z.string(),
  alt_attribute: z.string(),
  target_url: z.string().url(),
});

export type AssetsAddRequest = z.infer<typeof assetsAddRequest>;

export const assetsAddResponse = z.strictObject({
  id: z
    .number()
    .positive()
    .int()
    .transform((x) => x as AssetId),
  filename: z.string(),
  tags: z.string(),
  description: z.string(),
  alt_attribute: z.string(),
  asset_code: z.string(),
  mimetype: z.string(),
  size: z.number(),
  target_url: z.string(),
  created_at: z.number(),
});

export type AssetsAddResponse = z.infer<typeof assetsAddResponse>;
