'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsersRoutes {
    constructor(app) {
        this.app = app;
        this.logsRoutes = express_1.Router();
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
    }
    initPrivateRoutes() {
    }
    setRoutes() {
        this.app.use('/logs', this.logsRoutes);
    }
}
exports.default = UsersRoutes;
//# sourceMappingURL=index.js.map