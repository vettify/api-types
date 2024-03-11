import { z } from "zod";
import { fileRequest } from "../common/file_request";

export const assetsAddRequest = z.object({
  filename: z.string(),
  file: fileRequest,
  tags: z.string(),
  description: z.string(),
  alt_attribute: z.string(),
  target_url: z.string().url(),
});

export type AssetsAddRequest = z.infer<typeof assetsAddRequest>;

export const assetsAddResponse = z.object({
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
});

export type AssetsAddResponse = z.infer<typeof assetsAddResponse>;