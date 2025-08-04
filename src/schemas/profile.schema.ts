import { z } from "zod";
export const ProfileSchema = z.object({
  id: z.number().optional(), 
  email: z.string().email(),
  password: z.string().min(6),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string(),
});