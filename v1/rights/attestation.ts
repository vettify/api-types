import { z } from "zod";

export const rightsAttestationRequest = z.object({
  right_code: z.string(),
});

export type RightsAttestationRequest = z.infer<typeof rightsAttestationRequest>;

export const rightsAttestationResponse = z.object({
  owner: z.object({
    name: z.string(),
    website: z.string(),
    description: z.string(),
    logo: z.object({
      asset_code: z.string(),
    }),
  }),
  share: z.object({
    name: z.string(),
    website: z.string(),
    description: z.string(),
    logo: z.object({
      asset_code: z.string(),
    }),
  }),
  asset_code: z.string(),
  active: z.boolean(),
  relationship_nature: z.string(),
  created_at: z.number(),
});

export type RightsAttestationResponse = z.infer<typeof rightsAttestationResponse>;