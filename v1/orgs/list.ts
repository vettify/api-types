import { z } from "zod";

export const orgsListResponse = z.object({
  orgs: z
    .object({
      id: z.number(),
      owner: z.number(),
      name: z.string(),
      website: z.string(),
      description: z.string(),
      logo_id: z.number(),
      created_at: z.number(),
    })
    .array(),
});

export type OrgsListResponse = z.infer<typeof orgsListResponse>;