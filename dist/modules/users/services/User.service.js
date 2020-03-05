"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repository_1 = __importDefault(require("../repository/users.repository"));
class UserService {
    constructor() {
        this._userRepo = new users_repository_1.default();
    }
    get(callback) {
        this._userRepo.find(callback);
    }
}
exports.default = UserService;
//# sourceMappingURL=User.service.js.map