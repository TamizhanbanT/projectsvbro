import { Request, Response } from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../services/profile.service";

import { ProfileSchema } from "../schemas/profile.schema";

// Create profile
export const createProfileController = async (req: Request, res: Response) => {
  try {
    const validated = ProfileSchema.parse(req.body);
    const result = await createProfile(validated);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all profiles
export const getAllProfilesController = async (_req: Request, res: Response) => {
  try {
    const profiles = await getAllProfiles();
    res.status(200).json(profiles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get profile by ID
export const getProfileByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const profile = await getProfileById(id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.status(200).json(profile);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update profile
export const updateProfileController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await updateProfile(id, data);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete profile
export const deleteProfileController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await deleteProfile(id);
    res.status(200).json(deleted);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
