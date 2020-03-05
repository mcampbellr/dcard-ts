
'use strict'
import {Request, Response} from 'express'
import UserService from '../services/User.service'

import Result from '../../../helpers/result.helper'

class UsersController {
  public get (_req: Request, res: Response) {
    try {
      const service = new UserService()
      service.get((err, result) => {
        return new Result(res, {
          statusCode: (err) ? 500 : 200,
          message: (err) ? err : 'Success',
          data: result,
          error: err
        })
      })
    } catch (err) {
      res.send({error: 'Error in your request'})
    }
  }
}

export default new UsersController()