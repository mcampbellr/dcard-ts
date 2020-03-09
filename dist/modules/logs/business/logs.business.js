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
const logs_repo_1 = __importDefault(require("../repository/logs.repo"));
const log_schema_1 = __importDefault(require("../model/log.schema"));
class LogsBusiness {
    constructor() {
        this.logsRepo = new logs_repo_1.default();
    }
    create(message, action, category, diff, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const log = yield this.logsRepo.create(new log_schema_1.default({
                message,
                action,
                category,
                diff,
                createdBy: user
            }));
            return log;
        });
    }
}
exports.default = LogsBusiness;
//# sourceMappingURL=logs.business.js.map