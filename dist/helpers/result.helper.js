'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Result {
    constructor(res, options) {
        this.type = this.getType(this.code);
        this.message = options.message;
        this.code = options.statusCode;
        this.result = options === null || options === void 0 ? void 0 : options.data;
        this.error = options === null || options === void 0 ? void 0 : options.error;
        this.res = res;
        this.end();
    }
    end() {
        return this.res.status(this.code).send({
            type: this.getType(this.code),
            message: this.message,
            statusCode: this.code,
            result: this.result,
            error: this.error
        });
    }
    getType(code) {
        const first = String(code).charAt(0);
        switch (first) {
            case '1':
                return 'informational';
            case '2':
                return 'success';
            case '3':
                return 'redirection';
            case '4':
                return 'client error';
            case '5':
            default:
                return 'server error';
        }
    }
}
exports.default = Result;
//# sourceMappingURL=result.helper.js.map