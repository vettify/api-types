import { z } from "zod";

export const usersSwitchOrgRequest = z.object({
  orgId: z.number(),
});

export type UsersSwitchOrgRequest = z.infer<typeof usersSwitchOrgRequest>;

export const usersSwitchOrgResponse = z.object({
  session: z.string(),
});

export type UsersSwitchOrgResponse = z.infer<typeof usersSwitchOrgResponse>;
