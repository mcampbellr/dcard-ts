"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const chalk_1 = require("chalk");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
App_1.default.start(() => {
    console.log(chalk_1.cyan('[Server is running]:'), `On -> http://${process.env.HOST}:${process.env.PORT}`);
});
//# sourceMappingURL=Server.js.map