import { OrgId, RightMessageId } from "../../../v1/entities";
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
      id: z
        .number()
        .positive()
        .int()
        .transform((x) => x as RightMessageId),
      author: z.strictObject({
        org_id: z
          .number()
          .positive()
          .int()
          .transform((x) => x as OrgId),
        user: z.strictObject({
          firstname: z.string(),
          lastname: z.string(),
        }),
      }),
      edits: z
        .number()
        .positive()
        .int()
        .transform((x) => x as RightMessageId)
        .optional(),
      message: z.string(),
      created_at: z.number(),
    }),
  ),
  now: z.number(),
});

export type RightsMessagesAllResponse = z.infer<typeof rightsMessagesAllResponse>;
