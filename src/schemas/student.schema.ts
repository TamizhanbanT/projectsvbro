import z from "zod";

export const StudentSchema = z.object({
  id: z.number().optional(),
  studentName: z.string(),
  class: z.number(),
  profileId: z.number(),
  mentorId: z.number().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string().optional(),
});
