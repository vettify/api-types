import { z } from "zod";

export const fileRequest = z.strictObject({
  mimetype: z.string(),
  file: z.string(), // hex-encoded data
});
