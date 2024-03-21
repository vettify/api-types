import { z } from "zod";

export const rightsMessagesAllRequest = z.strictObject({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string(),
});

export type RightsMessagesAllRequest = z.infer<typeof rightsMessagesAllRequest>;

export const rightsMessagesAllResponse = z.strictObject({
  cursor: z.string(),
  messages: z.array(
    z.strictObject({
      id: z.number(),
      author: z.strictObject({
        org_id: z.number(),
        user: z.strictObject({
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
