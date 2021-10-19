import {Request, Response} from "express"
import { AutheticateUserService } from "../services/AuthenticateUserService"

class AutheticateUserController{
  async handle(req: Request, res: Response) {
    const {code} = req.body
    const service = new AutheticateUserService()
    const result =  await service.execute(code)
    return res.json(result)
  }
}

export {AutheticateUserController}