'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const auth_helper_1 = __importDefault(require("../../helpers/auth.helper"));
const debug = require('debug')('dcard:[User Routes]');
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
        this.initPublicRoutes();
        this.initPrivateRoutes();
    }
    initPublicRoutes() {
        debug('[POST] /users/auth Auth User [body] : {username, password}');
        this.usersRoutes.post('/auth', user_controller_1.default.auth);
    }
    initPrivateRoutes() {
        debug('[GET] /users');
        this.usersRoutes.get('/', auth_helper_1.default.verifyToken, user_controller_1.default.get);
    }
    setRoutes() {
        this.app.use('/users', this.usersRoutes);
    }
}
exports.default = UsersRoutes;
//# sourceMappingURL=index.js.map