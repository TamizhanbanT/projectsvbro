import { Router } from "express";
import {
  createRoleController,
  getAllRolesController,
  getRoleByIdController,
  updateRoleController,
  deleteRoleController,
} from "../controllers/role.controller";

const router = Router();

router.post("/", createRoleController);
router.get("/", getAllRolesController);
router.get("/:id", getRoleByIdController);
router.put("/:id", updateRoleController);
router.delete("/:id", deleteRoleController);

export default router;
