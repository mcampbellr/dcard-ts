"use strict";
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database/database"));
const users_1 = __importDefault(require("./modules/users"));
class App {
    constructor() {
        dotenv_1.default.config();
        this.app = express_1.default();
        this.server = http_1.default.createServer(this.app);
        this.init();
    }
    init() {
        this.initMiddlewares();
        this.initDatabase();
        this.initModules();
    }
    initDatabase() {
        let db = new database_1.default(process.env.MONGODB || '');
        db.connect();
    }
    initMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(morgan_1.default('dev'));
    }
    initModules() {
        new users_1.default(this.app);
    }
    start(onSuccess, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.server.listen(process.env.PORT, process.env.HOST);
                return onSuccess();
            }
            catch (err) {
                if (onError) {
                    return onError(err);
                }
                return;
            }
        });
    }
}
exports.default = new App();
//# sourceMappingURL=App.js.map