import { z } from "zod";

export const rightsMessagesAllRequest = z.object({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string(),
});

export type RightsMessagesAllRequest = z.infer<typeof rightsMessagesAllRequest>;

export const rightsMessagesAllResponse = z.object({
  cursor: z.string(),
  messages: z.array(
    z.object({
      id: z.number(),
      author: z.object({
        org_id: z.number(),
        user: z.object({
          firstname: z.string(),
          lastname: z.string(),
        }),
      }),
      edits: z.number().optional(),
      message: z.string(),
      created_at: z.number(),
    }),
  ),
  now: z.number(),
});

export type RightsMessagesAllResponse = z.infer<typeof rightsMessagesAllResponse>;
