import { z } from "zod";

export const invitesAssetSendRequest = z.strictObject({
  asset: z.strictObject({
    asset_id: z.number(),
  }),
  invitee: z.strictObject({
    user: z.strictObject({
      firstname: z.string(),
      lastname: z.string(),
      email: z.string().email(),
    }),
    org: z.strictObject({
      name: z.string(),
      website: z.string(),
    }),
  }),
  right: z.strictObject({
    target_url_type: z.number(),
    target_url: z.string(),
    relationship_nature: z.string(),
    message: z.string().optional(),
  }),
});

export type InvitesAssetSendRequest = z.infer<typeof invitesAssetSendRequest>;

export const invitesAssetSendResponse = z.strictObject({
  right_id: z.number(),
});

export type InvitesAssetSendResponse = z.infer<typeof invitesAssetSendResponse>;
