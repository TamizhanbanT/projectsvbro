import { prisma } from "../config/prisma";
import { Prisma, Role } from "@prisma/client";

// Create Role
export const createRole = async (data: Prisma.RoleCreateInput): Promise<Role> => {
  return await prisma.role.create({ data });
};

// Get All Roles
export const getAllRoles = async (): Promise<Role[]> => {
  return await prisma.role.findMany({
    include: {
      profileRoles: {
        include: {
          profile: true,
        },
      },
    },
  });
};

// Get Role by ID
export const getRoleById = async (id: number): Promise<Role | null> => {
  return await prisma.role.findUnique({
    where: { id },
    include: {
      profileRoles: {
        include: {
          profile: true,
        },
      },
    },
  });
};

// Update Role
export const updateRole = async (id: number, data: Prisma.RoleUpdateInput): Promise<Role> => {
  return await prisma.role.update({
    where: { id },
    data,
  });
};

// Delete Role
export const deleteRole = async (id: number): Promise<Role> => {
  return await prisma.role.delete({
    where: { id },
  });
};
