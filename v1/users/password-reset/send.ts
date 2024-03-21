import { z } from "zod";

export const usersPasswordResetSendRequest = z.strictObject({
  email: z.string().email(),
});

export type UsersPasswordResetSendRequest = z.infer<typeof usersPasswordResetSendRequest>;
