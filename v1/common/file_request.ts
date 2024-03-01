import { z } from "zod";

export const fileRequest = z.object({
  mimetype: z.string(),
  file: z.string(), // hex-encoded data
});
