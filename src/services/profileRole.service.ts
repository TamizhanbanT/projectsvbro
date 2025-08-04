import { prisma } from "../config/prisma";
import { ProfileRole } from "@prisma/client";

// Create 
export const createProfileRole = async (profileId: number, roleId: number): Promise<ProfileRole> => {
  return await prisma.profileRole.create({
    data: {
      profileId,
      roleId,
    },
  });
};

// Get all 
export const getAllProfileRoles = async (): Promise<ProfileRole[]> => {
  return await prisma.profileRole.findMany({
    include: {
      profile: true,
      role: true,
    },
  });
};

// Get specific 
export const getProfileRole = async (profileId: number, roleId: number): Promise<ProfileRole | null> => {
  return await prisma.profileRole.findUnique({
    where: {
      profileId_roleId: { profileId, roleId },
    },
    include: {
      profile: true,
      role: true,
    },
  });
};

// Delete 
export const deleteProfileRole = async (profileId: number, roleId: number): Promise<ProfileRole> => {
  return await prisma.profileRole.delete({
    where: {
      profileId_roleId: { profileId, roleId },
    },
  });
};
