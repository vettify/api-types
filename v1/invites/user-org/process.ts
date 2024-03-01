import { z } from "zod";

export const invitesUserOrgProcessRequest = z.object({
  code: z.string(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  orgname: z.string(),
  website: z.string(),
});

export type InvitesUserOrgProcessRequest = z.infer<typeof invitesUserOrgProcessRequest>;

export const invitesUserOrgProcessResponse = z.object({
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
      logo_id: z.number(),
      created_at: z.number(),
    })
    .array(),
  session: z.string(),
});

export type InvitesUserOrgProcessResponse = z.infer<typeof invitesUserOrgProcessResponse>;