import { z } from "zod";

export const orgsUpdateRequest = z.object({
  name: z.string().optional(),
  website: z.string().url().optional(),
  description: z.string().optional(),
  logo: z.object({
    asset_id: z.number(),
  }).optional(),
});

export type OrgsUpdateRequest = z.infer<typeof orgsUpdateRequest>;