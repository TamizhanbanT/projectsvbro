
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createMentor = async (data: any) => {
  return await prisma.mentor.create({ data });
};

export const getAllMentors = async () => {
  return await prisma.mentor.findMany({
    include: {
      profile: true,
      students: true,
    },
  });
};

export const getMentorById = async (id: number) => {
  return await prisma.mentor.findUnique({
    where: { id },
    include: {
      profile: true,
      students: true,
    },
  });
};

export const updateMentor = async (id: number, data: any) => {
  return await prisma.mentor.update({
    where: { id },
    data,
  });
};

export const deleteMentor = async (id: number) => {
  return await prisma.mentor.delete({
    where: { id },
  });
};
