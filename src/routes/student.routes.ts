
import { Router } from "express";
import {
  createStudentHandler,
  getAllStudentsHandler,
  getStudentByIdHandler,
  updateStudentHandler,
  deleteStudentHandler,
} from "../controllers/student.controller";

const router = Router();

router.post("/", createStudentHandler);
router.get("/", getAllStudentsHandler);
router.get("/:id", getStudentByIdHandler);
router.patch("/:id", updateStudentHandler);
router.delete("/:id", deleteStudentHandler);

export default router;
