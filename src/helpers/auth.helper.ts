'use strict'

import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

class AuthHelper {
  private secret: string = process.env.SECRET_KEY || 'n'

  createToken (user: any) {
      const payload = {
        _id: user._id || user.id,
        role: user.role || user.permissions
      }
    
      return jwt.sign(payload, this.secret)
  }

  async verifyToken (req: Request, res: Response, next: any) {
    if (!req.headers.authorization) return res.status(401).send({ error: 'Unauthorized Token' })
    const token = req.headers.authorization.split(' ')[1]
    try {
      const decoded = await jwt.verify(token, this.secret)
      // @ts-ignore
      req.headers._id = decoded._id 
      // @ts-ignore
      req.headers.role = decoded.role
      return next()
    } catch (e) {
      res.status(401).send({ error: 'Unauthorized Token', authorization: 'invalidToken' })
    }
  }
}

export default new AuthHelper()