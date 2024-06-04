import { z } from "zod";

export const usersConfirmEmailRequest = z.strictObject({
  code: z.string(),
});

export type UsersConfirmEmailRequest = z.infer<typeof usersConfirmEmailRequest>;

export const usersConfirmEmailResponse = z.strictObject({
  user: z.strictObject({
    email: z.string(),
    bitstate: z.number(),
    subscription_end: z.number(),
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
      logo: z.strictObject({
        asset_id: z.number(),
        asset_code: z.string(),
      }),
      created_at: z.number(),
    })
    .array(),
  session: z.string(),
});

export type UsersConfirmEmailResponse = z.infer<typeof usersConfirmEmailResponse>;
