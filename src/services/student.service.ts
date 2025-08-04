
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createStudent = async (data: any) => {
  return await prisma.student.create({ data });
};

export const getAllStudents = async () => {
  return await prisma.student.findMany({
    include: {
      profile: true,
      mentor: true,
    },
  });
};

export const getStudentById = async (id: number) => {
  return await prisma.student.findUnique({
    where: { id },
    include: {
      profile: true,
      mentor: true,
    },
  });
};

export const updateStudent = async (id: number, data: any) => {
  return await prisma.student.update({
    where: { id },
    data,
  });
};

export const deleteStudent = async (id: number) => {
  return await prisma.student.delete({
    where: { id },
  });
};
