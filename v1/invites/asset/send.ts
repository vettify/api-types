import { z } from "zod";

export const invitesAssetSendRequest = z.object({
  asset_id: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  orgname: z.string(),
  website: z.string(),
  target_url_type: z.number(),
  target_url: z.string(),
  relationship_nature: z.string(),
});

export type InvitesAssetSendRequest = z.infer<typeof invitesAssetSendRequest>;

export const invitesAssetSendResponse = z.object({
  right_id: z.number(),
});

export type InvitesAssetSendResponse = z.infer<typeof invitesAssetSendResponse>;