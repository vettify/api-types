import { z } from "zod";
import { UserId } from "../entities";

export const adminListUsersResponse = z.strictObject({
  users: z
    .object({
      id: z
        .number()
        .positive()
        .int()
        .transform((x) => x as UserId),
      firstname: z.string(),
      lastname: z.string(),
      email: z.string(),
      bitstate: z.number(),
      created_at: z.number(),
    })
    .array(),
});

export type AdminListUsersResponse = z.infer<typeof adminListUsersResponse>;
