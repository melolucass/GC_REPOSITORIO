import {Router} from "express"
import noteRouter from "../resources/note/note.router.js"


const router = Router()

router.use("/notes", noteRouter)

router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

export default router
    