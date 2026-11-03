import { type Request, type Response} from "express"
import { getNotes } from "./note.service.js"

const index = async (req: Request, res: Response) => {
    try{
        const notes = await getNotes()
        res.status(200).json(notes)
    } 
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}
const create = async (req: Request, res: Response) => {}
const read = async (req: Request, res: Response) => {}
const update = async (req: Request, res: Response) => {}
const remove = async (req: Request, res: Response) => {}

export default { index, create, read, update, remove }