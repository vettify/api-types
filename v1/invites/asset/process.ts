import { z } from "zod";

export const invitesAssetProcessRequest = z.object({
  code: z.string(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  orgname: z.string(),
  website: z.string().url(),
});

export type InvitesAssetProcessRequest = z.infer<typeof invitesAssetProcessRequest>;

export const invitesAssetProcessResponse = z.object({
  user: z.object({
    email: z.string(),
    bitstate: z.number(),
    firstname: z.string(),
    lastname: z.string(),
    profile_pic: z.string(),
  }),
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

export type InvitesAssetProcessResponse = z.infer<typeof invitesAssetProcessResponse>;
