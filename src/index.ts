import express from "express"
import getEnv from "./utils/getEnv.js"
import router from "./router/router.js"

const app = express()
const env = getEnv()


app.use(router)
app.listen(env.PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

