"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainRepository_1 = require("../../../database/MainRepository");
const User_schema_1 = __importDefault(require("../model/User.schema"));
class UserRepo extends MainRepository_1.RepositoryBase {
    constructor() {
        super(User_schema_1.default);
    }
}
exports.default = UserRepo;
//# sourceMappingURL=users.repository.js.map