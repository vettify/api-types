import { z } from "zod";
import { AssetId, RightId } from "../entities";

export const analyticsAssetViewsRequest = z.strictObject({
  asset_id: z
    .number()
    .positive()
    .int()
    .transform((x) => x as AssetId),
  from: z.number(),
  to: z.number(),
});

export type AnalyticsAssetViewsRequest = z.infer<typeof analyticsAssetViewsRequest>;

export const analyticsAssetViewsResponse = z.strictObject({
  interval: z.number(),
  data: z
    .object({
      at: z.number(),
      sum: z.number(),
    })
    .array(),
  rights: z
    .object({
      id: z
        .number()
        .positive()
        .int()
        .transform((x) => x as RightId),
      data: z
        .object({
          at: z.number(),
          sum: z.number(),
        })
        .array(),
    })
    .array(),
});

export type AnalyticsAssetViewsResponse = z.infer<typeof analyticsAssetViewsResponse>;
