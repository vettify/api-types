import { z } from "zod";

export const orgsHistoryRequest = z.object({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type OrgsHistoryRequest = z.infer<typeof orgsHistoryRequest>;

export const orgsHistoryResponse = z.object({
  cursor: z.string(),
  history: z.array(
    z.object({
      name: z.string().optional(),
      website: z.string().optional(),
      description: z.string().optional(),
      logo: z.object({
        asset_id: z.number(),
        asset_code: z.string(),
      }).optional(),
      created_at: z.number(),
    }),
  ),
});

export type OrgsHistoryResponse = z.infer<typeof orgsHistoryResponse>;