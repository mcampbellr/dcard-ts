'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Mixed = Schema.Types.Mixed;
const ObjectId = Schema.Types.ObjectId;
const LogSchema = new Schema({
    action: {
        type: String,
        createIndexes: true
    },
    category: {
        type: String,
        createIndexes: true
    },
    createdBy: {
        type: ObjectId,
        ref: 'user'
    },
    message: String,
    diff: {
        type: Mixed
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});
exports.default = mongoose_1.default.model('log', LogSchema);
//# sourceMappingURL=log.schema.js.map