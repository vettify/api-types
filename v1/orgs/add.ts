import { z } from "zod";

export const orgsAddRequest = z.object({
  name: z.string(),
  website: z.string().url(),
  description: z.string(),
});

export type OrgsAddRequest = z.infer<typeof orgsAddRequest>;

export const orgsAddResponse = z.object({
  currentOrg: z.number(),
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
  session: z.string(),
});

export type OrgsAddResponse = z.infer<typeof orgsAddResponse>;