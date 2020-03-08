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
const user_business_1 = __importDefault(require("../business/user.business"));
class UsersController {
    constructor() {
        this.business = new user_business_1.default();
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const user = yield this.business.findAndPopulate(username);
                res.status(200).send(user);
            }
            catch (err) {
                res.send({ error: 'Errror in your request' });
            }
        });
    }
    get(_req, res) {
        try {
            const service = new user_business_1.default();
            console.log(service.get());
            res.status(200).send({ user: 'user', token: 'token' });
        }
        catch (err) {
            res.send({ error: 'Error in your request' });
        }
    }
}
exports.default = new UsersController();
//# sourceMappingURL=user.controller.js.map