import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.send("Hello world!")
})

router.get("/about", () => {
    res.send("About page")
})

export default router