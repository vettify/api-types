import { z } from "zod";

export const adminListUsersResponse = z.strictObject({
  users: z
    .object({
      id: z.number(),
      firstname: z.string(),
      lastname: z.string(),
      email: z.string(),
      bitstate: z.number(),
      subscription_end: z.number(),
      created_at: z.number(),
    })
    .array(),
});

export type AdminListUsersResponse = z.infer<typeof adminListUsersResponse>;
