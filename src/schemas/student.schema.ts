import {z} from 'zod'
export const studentSchema = z.object({
  studentName: z.string(),
  class: z.number().min(1),
  mentorId: z.number().optional()
});