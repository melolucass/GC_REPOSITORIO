import {Router} from "express"
import noteRouter from "../resources/note/note.router.js"


const router = Router()

router.use("/notes", noteRouter)

export default router
    