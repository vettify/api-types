import { z } from "zod";

export const invitesAssetValidateRequest = z.object({
  code: z.string(),
});

export type InvitesAssetValidateRequest = z.infer<typeof invitesAssetValidateRequest>;

export const invitesAssetValidateResponse = z.object({
  invited_by: z.object({
    firstname: z.string(),
    lastname: z.string(),
    orgname: z.string(),
    website: z.string(),
  }),
  new_user: z
    .object({
      email: z.string(),
      suggested_firstname: z.string(),
      suggested_lastname: z.string(),
      suggested_orgname: z.string(),
      suggested_website: z.string(),
    })
    .optional(),
  existing_user: z
    .object({
      firstname: z.string(),
      lastname: z.string(),
      orgname: z.string(),
      website: z.string(),
    })
    .optional(),
  asset: z.object({
    filename: z.string(),
    description: z.string(),
    alt_attribute: z.string(),
    asset_code: z.string(),
    right_code: z.string(),
  }),
});

export type InvitesAssetValidateResponse = z.infer<typeof invitesAssetValidateResponse>;