'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthHelper {
    constructor() {
        this.secret = process.env.SECRET_KEY || 'n';
    }
    createToken(user, expiration) {
        if (!expiration)
            expiration = 3200;
        if (process.env.NODE_ENV !== 'production')
            expiration = 1800000;
        const payload = {
            _id: user._id || user.id,
            role: user.role || user.permissions
        };
        return jsonwebtoken_1.default.sign(payload, this.secret, { expiresIn: expiration });
    }
    verifyToken(_req, _res) {
    }
}
exports.default = new AuthHelper();
//# sourceMappingURL=auth.helper.js.map