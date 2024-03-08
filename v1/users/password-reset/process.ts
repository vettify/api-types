import { z } from "zod";

export const usersPasswordResetProcessRequest = z.object({
  code: z.string(),
  password: z.string(),
});

export type UsersPasswordResetProcessRequest = z.infer<typeof usersPasswordResetProcessRequest>;

export const usersPasswordResetProcessResponse = z.object({
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

export type UsersPasswordResetProcessResponse = z.infer<typeof usersPasswordResetProcessResponse>;
