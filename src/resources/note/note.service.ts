import { PrismaClient } from "../../generated/prisma/client.js"
import { PrismaMariaDb } from "@prisma/adapter-mariadb"

import getEnv from "../../utils/getEnv.js"

const env = getEnv()
const adapter = new PrismaMariaDb(env.DATABASE_URL)
const prisma = new PrismaClient({ adapter })

export const getNotes = async () => {
    return prisma.note.findMany()
}

export const createNote = () => {}