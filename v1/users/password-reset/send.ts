import { z } from "zod";

export const usersPasswordResetSendRequest = z.object({
  email: z.string().email(),
});

export type UsersPasswordResetSendRequest = z.infer<typeof usersPasswordResetSendRequest>;
