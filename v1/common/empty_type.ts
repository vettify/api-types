import { z } from "zod";

export const empty = z.strictObject({});

export type Empty = z.infer<typeof empty>;
