import { z } from "zod";

export const rightsMessagesAddRequest = z.object({
  right_id: z.number(),
  edits: z.number().optional(),
  message: z.string(),
});

export type RightsMessagesAddRequest = z.infer<typeof rightsMessagesAddRequest>;

export const rightsMessagesAddResponse = z.object({
  id: z.number(),
  created_at: z.number(),
});

export type RightsMessagesAddResponse = z.infer<typeof rightsMessagesAddResponse>;
