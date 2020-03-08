import { MainRepo } from '../../../database/MainRepo'
import InterfaceUser from '../model/user.interface'
import User from '../model/user.schema'

class UserRepo extends MainRepo<InterfaceUser> {
  constructor () {
    super(User)
  }
}

export default UserRepo