import { Request, Response } from "express";
import {
  createProfileRole,
  getAllProfileRoles,
  getProfileRole,
  deleteProfileRole,
} from "../services/profileRole.service";
import { ProfileRoleSchema } from "../schemas/profileRole.schema";

// Create
export const createProfileRoleController = async (req: Request, res: Response) => {
  try {
    const { profileId, roleId } = ProfileRoleSchema.parse(req.body);
    const result = await createProfileRole(profileId, roleId);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all
export const getAllProfileRolesController = async (_req: Request, res: Response) => {
  try {
    const results = await getAllProfileRoles();
    res.status(200).json(results);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get specific
export const getProfileRoleController = async (req: Request, res: Response) => {
  try {
    const profileId = parseInt(req.params.profileId);
    const roleId = parseInt(req.params.roleId);
    const result = await getProfileRole(profileId, roleId);
    if (!result) return res.status(404).json({ message: "Profile-Role not found" });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
export const deleteProfileRoleController = async (req: Request, res: Response) => {
  try {
    const profileId = parseInt(req.params.profileId);
    const roleId = parseInt(req.params.roleId);
    const deleted = await deleteProfileRole(profileId, roleId);
    res.status(200).json(deleted);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
