import { prisma } from "../config/prisma";
import { Prisma, Profile } from "@prisma/client";

// Create
export const createProfile = async (data: Prisma.ProfileCreateInput): Promise<Profile> => {
  try {
    return await prisma.profile.create({ data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to create profile: " + error.message);
    }
    throw new Error("Unknown error while creating profile");
  }
};

// Get all
export const getAllProfiles = async (): Promise<Profile[]> => {
  try {
    return await prisma.profile.findMany({
      include: {
        student: true,
        mentor: true,
        profileRoles: {
          include: {
            role: true,
          },
        },
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch profiles: " + error.message);
    }
    throw new Error("Unknown error while fetching profiles");
  }
};

// Get by ID
export const getProfileById = async (id: number): Promise<Profile | null> => {
  try {
    return await prisma.profile.findUnique({
      where: { id },
      include: {
        student: true,
        mentor: true,
        profileRoles: {
          include: { role: true },
        },
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to fetch profile: " + error.message);
    }
    throw new Error("Unknown error while fetching profile");
  }
};

// Update
export const updateProfile = async (
  id: number,
  data: Prisma.ProfileUpdateInput
): Promise<Profile> => {
  try {
    return await prisma.profile.update({
      where: { id },
      data,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to update profile: " + error.message);
    }
    throw new Error("Unknown error while updating profile");
  }
};

// Delete
export const deleteProfile = async (id: number): Promise<Profile> => {
  try {
    return await prisma.profile.delete({
      where: { id },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Failed to delete profile: " + error.message);
    }
    throw new Error("Unknown error while deleting profile");
  }
};
