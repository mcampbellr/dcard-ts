// import UserRepo from '../repository/users.repository'

class UserService implements UserService {
  // private _userRepo: UserRepo

  constructor () {
    // this._userRepo = new UserRepo()
  }

  public get () {
    console.log('Entra al Business')
  }

  public findAndPopulate (username: string) {
    console.log(username)
  }
}

export default UserService