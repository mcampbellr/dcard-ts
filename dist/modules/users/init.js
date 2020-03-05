'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controller/user.controller"));
class UsersRoutes {
    constructor(app) {
        this.app = app;
        this.usersRoutes = express_1.Router();
        this.init();
    }
    init() {
        this.initRoutes();
        this.setRoutes();
    }
    initRoutes() {
        this.usersRoutes.get('/', user_controller_1.default.get);
    }
    setRoutes() {
        this.app.use('/users', this.usersRoutes);
    }
}
exports.default = UsersRoutes;
//# sourceMappingURL=init.js.map