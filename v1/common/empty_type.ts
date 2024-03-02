import { z } from "zod";

export const empty = z.object({
});

export type Empty = z.infer<typeof empty>;
