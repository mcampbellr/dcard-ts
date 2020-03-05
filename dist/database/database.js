"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = require("chalk");
class Database {
    constructor(uri) {
        this.uri = uri;
    }
    connect() {
        mongoose_1.default.connect(this.uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }, (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(chalk_1.cyan('[Connected to database]'), `On -> ${this.uri}`);
            }
        });
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map