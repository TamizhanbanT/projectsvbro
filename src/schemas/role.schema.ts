import z from "zod";

export const RoleSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});
