import z from "zod";

export const ProfileRoleSchema = z.object({
  profileId: z.number(),
  roleId: z.number(),
});
