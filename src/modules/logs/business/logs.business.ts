'use strict'
import UserInterface from '../../users/model/User.interface'
import LogsRepo from '../repository/logs.repo'
import Log from '../model/log.schema'

class LogsBusiness implements LogsBusiness {
  private logsRepo:  LogsRepo
  
  constructor () {
    this.logsRepo = new LogsRepo()
  }

  public async create (message: string, action: string, category: string, diff?: object, user?: UserInterface) {
    const log = await this.logsRepo.create(new Log({
      message,
      action,
      category,
      diff,
      createdBy: user
    }))

    return log
  }

}

export default LogsBusiness