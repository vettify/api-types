import { z } from "zod";

export const rightsAttestationRequest = z.strictObject({
  right_code: z.string(),
});

export type RightsAttestationRequest = z.infer<typeof rightsAttestationRequest>;

export const rightsAttestationResponse = z.strictObject({
  owner: z.strictObject({
    name: z.string(),
    website: z.string(),
    description: z.string(),
    logo: z.strictObject({
      asset_code: z.string(),
    }),
  }),
  share: z.strictObject({
    name: z.string(),
    website: z.string(),
    description: z.string(),
    logo: z.strictObject({
      asset_code: z.string(),
    }),
  }),
  asset_code: z.string(),
  active: z.boolean(),
  relationship_nature: z.string(),
  created_at: z.number(),
});

export type RightsAttestationResponse = z.infer<typeof rightsAttestationResponse>;
