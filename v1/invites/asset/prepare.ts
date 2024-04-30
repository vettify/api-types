import { z } from "zod";

export const invitesAssetPrepareRequest = z.strictObject({
  email: z.string(),
});

export type InvitesAssetPrepareRequest = z.infer<typeof invitesAssetPrepareRequest>;

export const invitesAssetPrepareResponse = z.strictObject({
  orgs: z
    .object({
      id: z.number(),
      name: z.string(),
      website: z.string(),
      logo: z.strictObject({
        asset_code: z.string(),
      }),
    })
    .array(),
});

export type InvitesAssetPrepareResponse = z.infer<typeof invitesAssetPrepareResponse>;
