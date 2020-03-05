import InterfaceUser from "../model/User.interface"
// import UserRepo from '../repository/users.repository'

class UserModel {

  private _userModel: InterfaceUser;

  constructor(userModel: InterfaceUser) {
    this._userModel = userModel;
  }

  get name(): string {
    return this._userModel.name;
  }

  // get power(): string {
  //   return this._userModel.power;
  // }

  // get amountPeopleSaved(): number {
  //   return this._userModel.amountPeopleSaved;
  // }
  
  // static createHero(name: string, power: string) : Promise<InterfaceUser> {
  //   let p = new Promise((resolve, reject) => {
      
  //     let repo = new UserRepo();

  //     let hero = <InterfaceUser>{};

  //     repo.create(hero, (err, res) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       else {
  //         resolve(res);
  //       }
  //     });    
      
  //   });
    
  //   return p;
    
  // }
  
  // static findHero(name: string) : Promise<InterfaceUser> {
  //   let p = new Promise((resolve, reject) => {
  //     let repo = new UserRepo();

  //     repo.find({ name : name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       else {
  //         if (res.length) {
  //           resolve(res[0]);
  //         }
  //         else {
  //           resolve(null);
  //         }
  //       }
  //     });
  //   });
    
  //   return p    
  // }

}

export default UserModel