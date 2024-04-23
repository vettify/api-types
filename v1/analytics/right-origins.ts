import { z } from "zod";

export const analyticsRightOriginsRequest = z.strictObject({
  right_id: z.number(),
});

export type AnalyticsRightOriginsRequest = z.infer<typeof analyticsRightOriginsRequest>;

export const analyticsRightOriginsResponse = z.strictObject({
  sampled: z.boolean(), // indicates whether the result is approximate or exact
  data: z.object({
    origin: z.string(),
    views: z.number(),
    clicks: z.number(),
    last_seen: z.number(), // most recent view or click
  }).array(),
  now: z.number(),
});

export type AnalyticsRightOriginsResponse = z.infer<typeof analyticsRightOriginsResponse>;
