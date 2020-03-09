'use strict'

import UsersRepo from '../repository/users.repo'
import LogsBusiness from '../../logs/business/logs.business'

class UsersBusiness implements UsersBusiness {
  private usersRepo: UsersRepo
  private logger: LogsBusiness

  constructor () {
    this.usersRepo = new UsersRepo()
    this.logger = new LogsBusiness()
  }

  public get () {
    console.log('Entra al Business')
  }

  public async auth (username: string) {
    const user = await this.usersRepo.findAndPopulate(username)
    
    if(!user) {
      this.logger.create(`Error en inicio de sesión, ${username} no existe en la base de datos`, 'login', 'error')
      return {error: true, message: 'user not found'}
    }

    return
  }
}

export default UsersBusiness