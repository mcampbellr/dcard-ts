
'use strict'
import {Request, Response} from 'express'
import UserBusiness from '../business/user.business'

// import Result from '../../../helpers/result.helper'

class UsersController {
  private business: UserBusiness = new UserBusiness()

  public async auth (req: Request, res: Response){
    const { username, password } = req.body

    try {
      const user = await this.business.findAndPopulate(username)

      res.status(200).send(user)
    } catch (err) {
      res.send({error: 'Errror in your request'})
    }
  }

  public get (_req: Request, res: Response) {
    try {
      const service = new UserBusiness()
      console.log(service.get())
      res.status(200).send({user: 'user', token: 'token'})
    } catch (err) {
      res.send({error: 'Error in your request'})
    }
  }

  // public create (req: Request, res: Response) {
  //   try {
      
  //   } catch (err) {
      
  //   }
  // }
}

export default new UsersController()