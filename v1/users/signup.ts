import { z } from "zod";

export const usersSignupRequest = z.strictObject({
  user: z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    password: z.string(),
  }),
  org: z.object({
    name: z.string(),
    website: z.string(),
  }),
});

export type UsersSignupRequest = z.infer<typeof usersSignupRequest>;
