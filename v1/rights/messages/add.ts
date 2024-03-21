import { z } from "zod";

export const rightsMessagesAddRequest = z.strictObject({
  right_id: z.number(),
  edits: z.number().optional(),
  message: z.string(),
});

export type RightsMessagesAddRequest = z.infer<typeof rightsMessagesAddRequest>;

export const rightsMessagesAddResponse = z.strictObject({
  id: z.number(),
  created_at: z.number(),
});

export type RightsMessagesAddResponse = z.infer<typeof rightsMessagesAddResponse>;
