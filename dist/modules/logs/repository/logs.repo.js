"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainRepo_1 = require("../../../database/MainRepo");
const log_schema_1 = __importDefault(require("../model/log.schema"));
class LogRepo extends MainRepo_1.MainRepo {
    constructor() {
        super(log_schema_1.default);
    }
}
exports.default = LogRepo;
//# sourceMappingURL=logs.repo.js.map