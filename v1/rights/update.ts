import { z } from "zod";
import { RightId } from "../entities";

export const rightsUpdateRequest = z.strictObject({
  id: z
    .number()
    .positive()
    .int()
    .transform((x) => x as RightId),
  active: z.boolean().optional(),
  target_url_type: z.number().optional(),
  target_url: z.string().optional(),
  relationship_nature: z.string().optional(),
});

export type RightsUpdateRequest = z.infer<typeof rightsUpdateRequest>;
