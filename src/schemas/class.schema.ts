import z from "zod";

export const ClassSchema = z.object({
  id: z.number().optional(),
  standard: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string().optional(),
});
