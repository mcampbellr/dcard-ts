'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_service_1 = __importDefault(require("../services/User.service"));
const result_helper_1 = __importDefault(require("../../../helpers/result.helper"));
class UsersController {
    get(_req, res) {
        try {
            const service = new User_service_1.default();
            service.get((err, result) => {
                return new result_helper_1.default(res, {
                    statusCode: (err) ? 500 : 200,
                    message: (err) ? err : 'Success',
                    data: result,
                    error: err
                });
            });
        }
        catch (err) {
            res.send({ error: 'Error in your request' });
        }
    }
}
exports.default = new UsersController();
//# sourceMappingURL=user.controller.js.map