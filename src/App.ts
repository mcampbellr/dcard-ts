import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import http from 'http'
import dotenv from 'dotenv'
import Database from './database/database'

// MODULES
import UsersModule from './modules/users'

class App {
  private app: express.Application
  public server: http.Server
  
  constructor () {
    dotenv.config()
    this.app = express()
    this.server = http.createServer(this.app)
    this.init()
  }

  private init (): void {
    this.initMiddlewares()
    this.initDatabase()
    this.initModules()
  }

  private initDatabase() {
    let db = new Database(process.env.MONGODB || '')
    db.connect()
  }

  private initMiddlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(morgan('dev'))
  }

  private initModules (): void {
    new UsersModule(this.app)
  }

  public async start (onSuccess: Function, onError?: Function): Promise<Function | undefined> {
    try {
      // @ts-ignore // TODO Ask about this type of error
      await this.server.listen(process.env.PORT, process.env.HOST)
      return onSuccess()
    } catch (err) {
      if (onError) {
        return onError(err)
      }
      return
    }
  }
}

export default new App()
