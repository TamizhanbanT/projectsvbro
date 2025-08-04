import { z } from "zod";

export const mentorSchema = z.object({
  mentorName: z.string(),
  mentorPhone: z.bigint(),
  class: z.number().min(1)
});