import { z } from "zod";

export const invitesUserOrgValidateRequest = z.strictObject({
  code: z.string(),
});

export type InvitesUserOrgValidateRequest = z.infer<typeof invitesUserOrgValidateRequest>;

export const invitesUserOrgValidateResponse = z.strictObject({
  invited_by: z.strictObject({
    firstname: z.string(),
    lastname: z.string(),
  }),
  email: z.string(),
  suggested_firstname: z.string(),
  suggested_lastname: z.string(),
  suggested_orgname: z.string(),
  suggested_website: z.string(),
});

export type InvitesUserOrgValidateResponse = z.infer<typeof invitesUserOrgValidateResponse>;
