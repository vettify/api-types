import { z } from "zod";

export const usersPasswordResetValidateRequest = z.object({
  code: z.string(),
});

export type UsersPasswordResetValidateRequest = z.infer<typeof usersPasswordResetValidateRequest>;
