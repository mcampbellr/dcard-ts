'use strict'

import { Application, Router } from "express";
import UsersController from "./controller/user.controller";
import AuthHelper from '../../helpers/auth.helper'
const debug = require('debug')('dcard:[User Routes]')

class UsersRoutes {
  private app: Application
  private usersRoutes: Router

  constructor (app : Application) {
    this.app = app
    this.usersRoutes = Router()
    this.init()
  }

  private init (): void {
    this.initRoutes()
    this.setRoutes()
  }

  private initRoutes (): void {
    this.initPublicRoutes()
    this.initPrivateRoutes()
  }

  private initPublicRoutes (): void {
    debug('[POST] /users/auth Auth User [body] : {username, password}')
    this.usersRoutes.post('/auth', UsersController.auth)
  }
  
  private initPrivateRoutes (): void {
    debug('[GET] /users')
    this.usersRoutes.get('/', AuthHelper.verifyToken,  UsersController.get)
  }

  private setRoutes (): void {
    this.app.use('/users', this.usersRoutes)
  }
}

export default UsersRoutes