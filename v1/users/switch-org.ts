import { z } from "zod";
import { OrgId } from "../entities";

export const usersSwitchOrgRequest = z.strictObject({
  orgId: z
    .number()
    .positive()
    .int()
    .transform((x) => x as OrgId),
});

export type UsersSwitchOrgRequest = z.infer<typeof usersSwitchOrgRequest>;

export const usersSwitchOrgResponse = z.strictObject({
  session: z.string(),
});

export type UsersSwitchOrgResponse = z.infer<typeof usersSwitchOrgResponse>;
