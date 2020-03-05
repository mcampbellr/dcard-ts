"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor(uri) {
        this.uri = uri;
    }
    connect(callback) {
        mongoose_1.default.connect(this.uri, (err) => {
            return callback(err);
        });
    }
}
exports.default = Database;
//# sourceMappingURL=index.js.map