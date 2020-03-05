import { RepositoryBase } from '../../../database/MainRepository'
import InterfaceUser from '../model/User.interface'
import User from '../model/User.schema'

class UserRepo extends RepositoryBase<InterfaceUser> {
  constructor () {
    super(User)
  }
}

export default UserRepo