
'use strict'
import {Request, Response} from 'express'
import UsersBusiness from '../business/user.business'

// TODO poner el response pretty 

class UsersController {
  public async auth (req: Request, res: Response){
    const { username } = req.body

    try {
      const business = new UsersBusiness()
      const result = await business.auth(username)

      res.status(200).send(result)
    } catch (err) {
      res.send({error: 'Error procesing your request'})
    }
  }

  public get (_req: Request, res: Response) {
    try {
      res.status(200).send({user: 'user', token: 'token'})
    } catch (err) {
      res.send({error: 'Error procesing your request'})
    }
  }

  // public create (req: Request, res: Response) {
  //   try {
      
  //   } catch (err) {
      
  //   }
  // }
}

export default new UsersController()