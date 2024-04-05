import { RightId, RightMessageId } from "../../../v1/entities";
import { z } from "zod";

export const rightsMessagesAddRequest = z.strictObject({
  right_id: z
    .number()
    .positive()
    .int()
    .transform((x) => x as RightId),
  edits: z.number().optional(),
  message: z.string(),
});

export type RightsMessagesAddRequest = z.infer<typeof rightsMessagesAddRequest>;

export const rightsMessagesAddResponse = z.strictObject({
  id: z
    .number()
    .positive()
    .int()
    .transform((x) => x as RightMessageId),
  created_at: z.number(),
});

export type RightsMessagesAddResponse = z.infer<typeof rightsMessagesAddResponse>;
