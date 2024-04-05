import { z } from "zod";
import { AssetId } from "../entities";

export const orgsUpdateRequest = z.strictObject({
  name: z.string().optional(),
  website: z.string().url().optional(),
  description: z.string().optional(),
  logo: z
    .object({
      asset_id: z
        .number()
        .positive()
        .int()
        .transform((x) => x as AssetId),
    })
    .optional(),
});

export type OrgsUpdateRequest = z.infer<typeof orgsUpdateRequest>;
