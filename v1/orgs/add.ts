import { z } from "zod";
import { AssetId, OrgId, UserId } from "../entities";

export const orgsAddRequest = z.strictObject({
  name: z.string(),
  website: z.string().url(),
  description: z.string(),
});

export type OrgsAddRequest = z.infer<typeof orgsAddRequest>;

export const orgsAddResponse = z.strictObject({
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
          .positive()
          .int()
          .transform((x) => x as AssetId),
        asset_code: z.string(),
      }),
      created_at: z.number(),
    })
    .array(),
  session: z.string(),
});

export type OrgsAddResponse = z.infer<typeof orgsAddResponse>;
