import { Request, Response } from "express";
import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../services/role.service";
import { RoleSchema } from "../schemas/role.schema";

// Create Role
export const createRoleController = async (req: Request, res: Response) => {
  try {
    const validated = RoleSchema.parse(req.body);
    const role = await createRole(validated);
    res.status(201).json(role);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Roles
export const getAllRolesController = async (_req: Request, res: Response) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json(roles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get Role by ID
export const getRoleByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const role = await getRoleById(id);
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(role);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Role
export const updateRoleController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const updated = await updateRole(id, data);
    res.status(200).json(updated);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Role
export const deleteRoleController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await deleteRole(id);
    res.status(200).json(deleted);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
