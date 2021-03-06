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
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.body;
            try {
                const business = new user_business_1.default();
                const result = yield business.auth(username);
                res.status(200).send(result);
            }
            catch (err) {
                res.send({ error: 'Error procesing your request' });
            }
        });
    }
    get(_req, res) {
        try {
            res.status(200).send({ user: 'user', token: 'token' });
        }
        catch (err) {
            res.send({ error: 'Error procesing your request' });
        }
    }
}
exports.default = new UsersController();
//# sourceMappingURL=user.controller.js.map