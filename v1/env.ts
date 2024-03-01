import { z } from "zod";

export const envResponse = z.object({
  env: z.string(),
});

export type EnvResponse = z.infer<typeof envResponse>;
