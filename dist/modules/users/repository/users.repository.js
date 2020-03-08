"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainRepo_1 = require("../../../database/MainRepo");
const user_schema_1 = __importDefault(require("../model/user.schema"));
class UserRepo extends MainRepo_1.MainRepo {
    constructor() {
        super(user_schema_1.default);
    }
}
exports.default = UserRepo;
//# sourceMappingURL=users.repository.js.map