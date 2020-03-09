import { MainRepo } from '../../../database/MainRepo'
import UserInterface from '../model/user.interface'
import User from '../model/user.schema'

class UserRepo extends MainRepo<UserInterface> {
  constructor () {
    super(User)
  }

  public findAndPopulate (username: string) {
    return User.findOne({ $or: [{ username }, { email: username }] })
    //.populate({ path: 'companies', select: 'name username images' })
  }
}

export default UserRepo