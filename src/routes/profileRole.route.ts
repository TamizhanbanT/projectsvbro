import { Router } from "express";
import {
  createProfileRoleController,
  getAllProfileRolesController,
  getProfileRoleController,
  deleteProfileRoleController,
} from "../controllers/profileRole.controller";

const router = Router();

router.post("/", createProfileRoleController); 
router.get("/", getAllProfileRolesController);
router.get("/:profileId/:roleId", getProfileRoleController); 
router.delete("/:profileId/:roleId", deleteProfileRoleController); 

export default router;
