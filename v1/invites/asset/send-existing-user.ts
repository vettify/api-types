import { z } from "zod";

export const invitesAssetSendExistingUserRequest = z.strictObject({
  asset: z.strictObject({
    asset_id: z.number(),
  }),
  invitee: z.strictObject({
    user: z.strictObject({
      email: z.string().email(),
    }),
    org: z.strictObject({
      id: z.number(),
    }),
  }),
  right: z.strictObject({
    target_url_type: z.number(),
    target_url: z.string(),
    relationship_nature: z.string(),
    message: z.string().optional(),
  }),
});

export type InvitesAssetSendExistingUserRequest = z.infer<typeof invitesAssetSendExistingUserRequest>;

export const invitesAssetSendExistingUserResponse = z.strictObject({
  right_id: z.number(),
});

export type InvitesAssetSendExistingUserResponse = z.infer<typeof invitesAssetSendExistingUserResponse>;
