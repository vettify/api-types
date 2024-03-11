import { z } from "zod";

export const adminDecryptRequest = z.object({
  code: z.string(),
});

export type AdminDecryptRequest = z.infer<typeof adminDecryptRequest>;

export const adminDecryptResponse = z.any();

export type AdminDecryptResponse = z.infer<typeof adminDecryptResponse>;
