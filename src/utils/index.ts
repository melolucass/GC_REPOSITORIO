import express from "express"
import getEnv from "./utils/getEnv.js"

const app = express()
const env = getEnv()
const PORT = env.PORT


app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})