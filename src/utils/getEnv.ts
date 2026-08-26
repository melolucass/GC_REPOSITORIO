import {cleanEnv, port, str} from "envalid";
import dotenv from "dotenv"
dotenv.config({ quiet:true })
export function getEnv() {
    return cleanEnv(process.env, {
        PORT: port({default: 4444}),
        NODE_ENV: str({ default: "development", choices: ["development", "production", "test"]})
    })
}
export default getEnv 