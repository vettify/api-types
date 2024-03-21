import { z } from "zod";

export const invitesUserOrgSendRequest = z.strictObject({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  orgname: z.string(),
  website: z.string(),
});

export type InvitesUserOrgSendRequest = z.infer<typeof invitesUserOrgSendRequest>;
