import UserRepo from '../repository/users.repository'

class UserService implements UserService {
  private _userRepo: UserRepo

  constructor () {
    this._userRepo = new UserRepo()
  }

  get(callback: (error: any, result: any) => void) {
    this._userRepo.find(callback)
  }
}

export default UserService