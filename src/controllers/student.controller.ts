
import { Request, Response } from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../services/student.service";
import { StudentSchema } from "../schemas/student.schema";

export const createStudentHandler = async (req: Request, res: Response) => {
  try {
    const parsed = StudentSchema.parse(req.body);
    const student = await createStudent(parsed);
    res.status(201).json(student);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllStudentsHandler = async (_req: Request, res: Response) => {
  const students = await getAllStudents();
  res.json(students);
};

export const getStudentByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const student = await getStudentById(id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
};

export const updateStudentHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const parsed = StudentSchema.partial().parse(req.body);
    const updated = await updateStudent(id, parsed);
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteStudentHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await deleteStudent(id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete student" });
  }
};
