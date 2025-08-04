
import { Request, Response } from "express";
import * as MentorService from "../services/mentor.service";
import { MentorSchema } from "../schemas/mentor.schema";

export const createMentor = async (req: Request, res: Response) => {
  try {
    const parsed = MentorSchema.parse(req.body);
    const mentor = await MentorService.createMentor(parsed);
    res.status(201).json(mentor);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllMentors = async (_req: Request, res: Response) => {
  try {
    const mentors = await MentorService.getAllMentors();
    res.json(mentors);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getMentorById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const mentor = await MentorService.getMentorById(id);
    if (!mentor) return res.status(404).json({ message: "Mentor not found" });
    res.json(mentor);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateMentor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const parsed = MentorSchema.partial().parse(req.body);
    const mentor = await MentorService.updateMentor(id, parsed);
    res.json(mentor);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteMentor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await MentorService.deleteMentor(id);
    res.json({ message: "Mentor deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
