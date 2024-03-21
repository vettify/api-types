import { z } from "zod";

export const rightsAllRequest = z.strictObject({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type RightsAllRequest = z.infer<typeof rightsAllRequest>;

export const ownedRight = z.strictObject({
  invitee: z.strictObject({
    user: z.strictObject({
      firstname: z.string(),
      lastname: z.string(),
      email: z.string(),
    }),
    org: z.strictObject({
      id: z.number(),
      name: z.string(),
      website: z.string(),
    }),
  }),
  right: z.strictObject({
    id: z.number(),
    asset_id: z.number(),
    active: z.boolean(),
    last_seen: z.number(),
    target_url_type: z.number(),
    target_url: z.string(),
    relationship_nature: z.string(),
    created_at: z.number(),
  }),
  messages: z.strictObject({
    cursor: z.string(),
  }),
});

export type OwnedRight = z.infer<typeof ownedRight>;

export const sharedRight = z.strictObject({
  inviter: z.strictObject({
    user: z.strictObject({
      firstname: z.string(),
      lastname: z.string(),
    }),
    org: z.strictObject({
      id: z.number(),
      name: z.string(),
      website: z.string(),
    }),
  }),
  right: z.strictObject({
    id: z.number(),
    right_code: z.string(),
    active: z.boolean(),
    last_seen: z.number(),
    target_url_type: z.number(),
    target_url: z.string(),
    relationship_nature: z.string(),
    created_at: z.number(),
  }),
  messages: z.strictObject({
    cursor: z.string(),
  }),
  asset: z.strictObject({
    filename: z.string(),
    description: z.string(),
    alt_attribute: z.string(),
    asset_code: z.string(),
    target_url: z.string(),
  }),
});

export type SharedRight = z.infer<typeof sharedRight>;

export const rightsAllResponse = z.strictObject({
  cursor: z.string(),
  owned: z.array(ownedRight),
  shared: z.array(sharedRight),
  now: z.number(),
});

export type RightsAllResponse = z.infer<typeof rightsAllResponse>;
