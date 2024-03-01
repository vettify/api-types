import { z } from "zod";
import { fileRequest } from "../common/file_request";

export const assetsUpdateRequest = z.object({
  id: z.number(),
  filename: z.string().optional(),
  tags: z.string().optional(),
  description: z.string().optional(),
  alt_attribute: z.string().optional(),
  file: fileRequest.optional(),
  target_url: z.string().url().optional(),
});

export type AssetsUpdateRequest = z.infer<typeof assetsUpdateRequest>;