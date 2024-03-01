import { z } from "zod";

export const orgsAddRequest = z.object({
  name: z.string(),
  website: z.string().url(),
  description: z.string(),
});

export type OrgsAddRequest = z.infer<typeof orgsAddRequest>;

export const orgsAddResponse = z.object({
  id: z.number(),
});

export type OrgsAddResponse = z.infer<typeof orgsAddResponse>;