import { z } from "zod";

export const rightsAllRequest = z.object({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type RightsAllRequest = z.infer<typeof rightsAllRequest>;

export const rightsAllResponse = z.object({
  cursor: z.string(),
  owned: z.array(
    z.object({
      id: z.number(),
      other_org_id: z.number(),
      asset_id: z.number(),
      active: z.boolean(),
      target_url_type: z.number(),
      target_url: z.string(),
      relationship_nature: z.string(),
      created_at: z.number(),
    }),
  ),
  shared: z.array(
    z.object({
      id: z.number(),
      org_id: z.number(),
      rightCode: z.string(),
      active: z.boolean(),
      target_url_type: z.number(),
      target_url: z.string(),
      relationship_nature: z.string(),
      created_at: z.number(),
    }),
  ),
});

export type RightsAllResponse = z.infer<typeof rightsAllResponse>;