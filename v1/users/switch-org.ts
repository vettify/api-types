import { z } from "zod";

export const usersSwitchOrgRequest = z.strictObject({
  orgId: z.number(),
});

export type UsersSwitchOrgRequest = z.infer<typeof usersSwitchOrgRequest>;

export const usersSwitchOrgResponse = z.strictObject({
  session: z.string(),
});

export type UsersSwitchOrgResponse = z.infer<typeof usersSwitchOrgResponse>;
