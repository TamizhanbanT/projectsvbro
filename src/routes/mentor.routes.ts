
import { Router } from "express";
import * as MentorController from "../controllers/mentor.controller";

const router = Router();

router.post("/", MentorController.createMentor);
router.get("/", MentorController.getAllMentors);
router.get("/:id", MentorController.getMentorById);
router.patch("/:id", MentorController.updateMentor);
router.delete("/:id", MentorController.deleteMentor);

export default router;
