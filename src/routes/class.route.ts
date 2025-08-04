import { Router } from "express";
import {
  createClassController,
  getAllClassesController,
  getClassByIdController,
  updateClassController,
  deleteClassController,
} from "../controllers/class.controller";

const router = Router();

router.post("/", createClassController);
router.get("/", getAllClassesController);
router.get("/:id", getClassByIdController);
router.put("/:id", updateClassController);
router.delete("/:id", deleteClassController);

export default router;
