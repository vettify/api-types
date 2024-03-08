import { z } from "zod";

export const rightsHistoryRequest = z.object({
  id: z.number(),
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type RightsHistoryRequest = z.infer<typeof rightsHistoryRequest>;

export const rightsHistoryResponse = z.object({
  cursor: z.string(),
  history: z.array(
    z.object({
      active: z.boolean().optional(),
      target_url_type: z.number().optional(),
      target_url: z.string().optional(),
      relationship_nature: z.string().optional(),
      created_at: z.number(),
    }),
  ),
});

export type RightsHistoryResponse = z.infer<typeof rightsHistoryResponse>;
