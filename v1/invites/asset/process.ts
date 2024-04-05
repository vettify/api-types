import { AssetId, OrgId, UserId } from "../../../v1/entities";
import { z } from "zod";

export const invitesAssetProcessRequest = z.strictObject({
  code: z.string(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  orgname: z.string(),
  website: z.string().url(),
});

export type InvitesAssetProcessRequest = z.infer<typeof invitesAssetProcessRequest>;

export const invitesAssetProcessResponse = z.strictObject({
  user: z.strictObject({
    email: z.string(),
    bitstate: z.number(),
    firstname: z.string(),
    lastname: z.string(),
    profile_pic: z.string(),
  }),
  currentOrg: z
    .number()
    .positive()
    .int()
    .transform((x) => x as OrgId),
  orgs: z
    .object({
      id: z
        .number()
        .positive()
        .int()
        .transform((x) => x as OrgId),
      owner: z
        .number()
        .positive()
        .int()
        .transform((x) => x as UserId),
      name: z.string(),
      website: z.string(),
      description: z.string(),
      logo: z.strictObject({
        asset_id: z
          .number()
          .nonnegative()
          .int()
          .transform((x) => x as AssetId),
        asset_code: z.string(),
      }),
      created_at: z.number(),
    })
    .array(),
  session: z.string(),
});

export type InvitesAssetProcessResponse = z.infer<typeof invitesAssetProcessResponse>;
