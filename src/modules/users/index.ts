'use strict'

import { Application, Router } from "express";
import UsersController from "./controller/user.controller";
import AuthHelper from '../../helpers/auth.helper'

class UsersRoutes {
  private app: Application
  private usersRoutes: Router
  // private controller: UsersController

  constructor (app : Application) {
    // this.controller = controller
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
  }
  
  private initPrivateRoutes (): void {
    console.log('[GET]', '/users')
    this.usersRoutes.get('/', AuthHelper.verifyToken,  UsersController.get)
  }

  private setRoutes (): void {
    this.app.use('/users', this.usersRoutes)
  }
}

export default UsersRoutes