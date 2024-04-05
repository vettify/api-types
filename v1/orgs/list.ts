import { z } from "zod";
import { AssetId, OrgId, UserId } from "../entities";

export const orgsListResponse = z.strictObject({
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
          .positive()
          .int()
          .transform((x) => x as AssetId),
        asset_code: z.string(),
      }),
      created_at: z.number(),
    })
    .array(),
});

export type OrgsListResponse = z.infer<typeof orgsListResponse>;
