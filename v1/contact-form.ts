import { z } from "zod";

export const contactFormRequest = z.strictObject({
  form_id: z.enum(["contact", "sales"]),
  email: z.string().email().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  message: z.string(),
});

export type ContactFormRequest = z.infer<typeof contactFormRequest>;
