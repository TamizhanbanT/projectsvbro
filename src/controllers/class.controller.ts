import { Request, Response } from "express";
import {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass,
} from "../services/class.service";
import { ClassSchema } from "../schemas/class.schema";

// Create Class
export const createClassController = async (req: Request, res: Response) => {
  try {
    const validated = ClassSchema.parse(req.body);
    const newClass = await createClass(validated);
    res.status(201).json(newClass);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Classes
export const getAllClassesController = async (_req: Request, res: Response) => {
  try {
    const classes = await getAllClasses();
    res.status(200).json(classes);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get Class By ID
export const getClassByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const cls = await getClassById(id);
    if (!cls) return res.status(404).json({ message: "Class not found" });
    res.status(200).json(cls);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Class
export const updateClassController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const updated = await updateClass(id, req.body);
    res.status(200).json(updated);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Class
export const deleteClassController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await deleteClass(id);
    res.status(200).json(deleted);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
