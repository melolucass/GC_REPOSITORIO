import express from "express"
import getEnv from "./utils/getEnv.js"
import router from "./router/router.js"
import helmet from "helmet"

const app = express()
const env = getEnv()

app.use(helmet)
app.use(router)
app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`)
})

