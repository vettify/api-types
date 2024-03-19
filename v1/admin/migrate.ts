import { z } from "zod";

export const adminMigrateRequest = z.strictObject({
  users: z.boolean().default(false)
});

export type AdminMigrateRequest = z.infer<typeof adminMigrateRequest>;

export const adminMigrateResponse = z.any();

export type AdminMigrateResponse = z.infer<typeof adminMigrateResponse>;
