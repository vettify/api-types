import { z } from "zod";

export const usersPasswordResetValidateRequest = z.strictObject({
  code: z.string(),
});

export type UsersPasswordResetValidateRequest = z.infer<typeof usersPasswordResetValidateRequest>;
