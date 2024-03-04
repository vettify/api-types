import { z } from "zod";

export const envResponse = z.object({
  env: z.string(),
  gitSha: z.string(),
  apiGitSha: z.string(),
});

export type EnvResponse = z.infer<typeof envResponse>;
