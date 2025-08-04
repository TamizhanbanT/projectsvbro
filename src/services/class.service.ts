import { prisma } from "../config/prisma";
import { Prisma, Class } from "@prisma/client";

// Create
export const createClass = async (data: Prisma.ClassCreateInput): Promise<Class> => {
  return await prisma.class.create({ data });
};

// Get all
export const getAllClasses = async (): Promise<Class[]> => {
  return await prisma.class.findMany();
};

// Get by ID
export const getClassById = async (id: number): Promise<Class | null> => {
  return await prisma.class.findUnique({ where: { id } });
};

// Update
export const updateClass = async (id: number, data: Prisma.ClassUpdateInput): Promise<Class> => {
  return await prisma.class.update({
    where: { id },
    data,
  });
};

// Delete
export const deleteClass = async (id: number): Promise<Class> => {
  return await prisma.class.delete({ where: { id } });
};
