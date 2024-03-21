import { z } from "zod";

export const usersUpdateProfileRequest = z.strictObject({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password: z.string().optional(),
  old_password: z.string().optional(),
});

export type UsersUpdateProfileRequest = z.infer<typeof usersUpdateProfileRequest>;

export const usersUpdateProfileResponse = z.strictObject({
  email: z.string(),
  bitstate: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  profile_pic: z.string(),
});

export type UsersUpdateProfileResponse = z.infer<typeof usersUpdateProfileResponse>;
