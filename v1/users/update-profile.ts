import { z } from "zod";

export const usersUpdateProfileRequest = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password: z.string().optional(),
});

export type UsersUpdateProfileRequest = z.infer<typeof usersUpdateProfileRequest>;

export const usersUpdateProfileResponse = z.object({
  email: z.string(),
  bitstate: z.number(),
  firstname: z.string(),
  lastname: z.string(),
  profile_pic: z.string(),
});

export type UsersUpdateProfileResponse = z.infer<typeof usersUpdateProfileResponse>;