import { z } from "zod";

export const rightsAllRequest = z.object({
  batchSize: z.number().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type RightsAllRequest = z.infer<typeof rightsAllRequest>;

export const rightsAllResponse = z.object({
  cursor: z.string(),
  owned: z.array(
    z.object({
      right: z.object({
        id: z.number(),
        asset_id: z.number(),
        active: z.boolean(),
        last_seen: z.number(),
        target_url_type: z.number(),
        target_url: z.string(),
        relationship_nature: z.string(),
        created_at: z.number(),
      }),
      invitee: z.object({
        user: z.object({
          firstname: z.string(),
          lastname: z.string(),
          email: z.string(),
        }),
        org: z.object({
          name: z.string(),
          website: z.string(),
        }),
      }),
    }),
  ),
  shared: z.array(
    z.object({
      inviter: z.object({
        user: z.object({
          firstname: z.string(),
          lastname: z.string(),
        }),
        org: z.object({
          name: z.string(),
          website: z.string(),
        }),
      }),
      asset: z.object({
        filename: z.string(),
        description: z.string(),
        alt_attribute: z.string(),
        asset_code: z.string(),
        target_url: z.string(),
      }),
      right: z.object({
        id: z.number(),
        right_code: z.string(),
        active: z.boolean(),
        last_seen: z.number(),
        target_url_type: z.number(),
        target_url: z.string(),
        relationship_nature: z.string(),
        created_at: z.number(),
      }),
    }),
  ),
  now: z.number(),
});

export type RightsAllResponse = z.infer<typeof rightsAllResponse>;