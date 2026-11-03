import { Router } from "express"
import noteController from "./note.controller.js"

const router = Router()

router.get("/", noteController.index);
router.post("/", noteController.create);
router.get("/", noteController.read);
router.put("/", noteController.update);
router.delete("/", noteController.remove);

export default router