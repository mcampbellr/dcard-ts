'use strict'

import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

class AuthHelper {
  private secret: string = process.env.SECRET_KEY || 'n'

  createToken (user: any, expiration?: number) {
      if (!expiration) expiration = 3200
      if (process.env.NODE_ENV !== 'production') expiration = 1800000

      const payload = {
        _id: user._id || user.id,
        role: user.role || user.permissions
      }
    
      return jwt.sign(payload, this.secret, { expiresIn: expiration })
  }

  verifyToken (_req: Request, _res: Response) {
    // if (!req.headers.authorization) return res.status(401).(res, 401, { error: 'Unauthorized Token' })
    // const token = req.headers.authorization.split(' ')[1]
    // try {
    //   const decoded = await jwt.verify(token, secretKey)
    //   req.headers._id = decoded._id
    //   req.headers.role = decoded.role
    //   return next()
    // } catch (e) {
    //   return response(res, 401, { error: 'Unauthorized Token', authorization: 'invalidToken' })
    // }
  }
}

export default new AuthHelper()