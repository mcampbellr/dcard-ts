'use strict'

import { Application, Router } from "express";
// import LogsController from "./controller/logs.controller";
// import AuthHelper from '../../helpers/auth.helper'
// const debug = require('debug')('dcard:[Logs Routes]')

class UsersRoutes {
  private app: Application
  private logsRoutes: Router

  constructor (app : Application) {
    this.app = app
    this.logsRoutes = Router()
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
    // debug('[POST] /users/auth Auth User [body] : {username, password}')
    // this.usersRoutes.post('/auth', LogsController.auth)
  }
  
  private initPrivateRoutes (): void {
    // debug('[GET] /users')
    // this.usersRoutes.get('/', AuthHelper.verifyToken, LogsController.get)
  }

  private setRoutes (): void {
    this.app.use('/logs', this.logsRoutes)
  }
}

export default UsersRoutes