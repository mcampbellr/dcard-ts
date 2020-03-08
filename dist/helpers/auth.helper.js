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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthHelper {
    constructor() {
        this.secret = process.env.SECRET_KEY || 'n';
    }
    createToken(user) {
        const payload = {
            _id: user._id || user.id,
            role: user.role || user.permissions
        };
        return jsonwebtoken_1.default.sign(payload, this.secret);
    }
    verifyToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.headers.authorization)
                return res.status(401).send({ error: 'Unauthorized Token' });
            const token = req.headers.authorization.split(' ')[1];
            try {
                const decoded = yield jsonwebtoken_1.default.verify(token, this.secret);
                req.headers._id = decoded._id;
                req.headers.role = decoded.role;
                return next();
            }
            catch (e) {
                res.status(401).send({ error: 'Unauthorized Token', authorization: 'invalidToken' });
            }
        });
    }
}
exports.default = new AuthHelper();
//# sourceMappingURL=auth.helper.js.map