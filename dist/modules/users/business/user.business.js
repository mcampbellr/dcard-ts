'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_repo_1 = __importDefault(require("../repository/users.repo"));
const logs_business_1 = __importDefault(require("../../logs/business/logs.business"));
class UsersBusiness {
    constructor() {
        this.usersRepo = new users_repo_1.default();
        this.logger = new logs_business_1.default();
    }
    get() {
        console.log('Entra al Business');
    }
    auth(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepo.findAndPopulate(username);
            if (!user) {
                this.logger.create(`Error en inicio de sesión, ${username} no existe en la base de datos`, 'login', 'error');
                return { error: true, message: 'user not found' };
            }
            return;
        });
    }
}
exports.default = UsersBusiness;
//# sourceMappingURL=user.business.js.map