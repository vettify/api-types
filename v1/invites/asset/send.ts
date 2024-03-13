import { z } from "zod";

export const invitesAssetSendRequest = z.object({
  asset: z.object({
    asset_id: z.number(),
  }),
  invitee: z.object({
    user: z.object({
      firstname: z.string(),
      lastname: z.string(),
      email: z.string().email(),
    }),
    org: z.object({
      name: z.string(),
      website: z.string(),
    }),
  }),
  right: z.object({
    target_url_type: z.number(),
    target_url: z.string(),
    relationship_nature: z.string(),
    message: z.string().optional(),
  }),
});

export type InvitesAssetSendRequest = z.infer<typeof invitesAssetSendRequest>;

export const invitesAssetSendResponse = z.object({
  right_id: z.number(),
});

export type InvitesAssetSendResponse = z.infer<typeof invitesAssetSendResponse>;
