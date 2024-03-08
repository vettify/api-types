import { z } from "zod";

export const orgsListResponse = z.object({
  orgs: z
    .object({
      id: z.number(),
      owner: z.number(),
      name: z.string(),
      website: z.string(),
      description: z.string(),
      logo: z.object({
        asset_id: z.number(),
        asset_code: z.string(),
      }),
      created_at: z.number(),
    })
    .array(),
});

export type OrgsListResponse = z.infer<typeof orgsListResponse>;
