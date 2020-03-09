'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { isEmail } = require('validator');
const Schema = mongoose_1.default.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;
const UserSchema = new Schema({
    prefix: String,
    name: {
        type: String,
        required: 'Name is required'
    },
    lastname: {
        type: String,
        required: 'Lastname is required'
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        createIndexes: { unique: true },
        required: 'Email address is required',
        validate: [isEmail, 'invalid email'],
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        maxlength: 15,
        createIndexes: { unique: true }
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'broker', 'superadmin'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['created', 'active', 'suspended'],
        default: 'created'
    },
    tags: Mixed,
    profile: Mixed,
    country: Mixed,
    contacts: Mixed,
    socials: Mixed,
    images: Mixed,
    shipping: Mixed,
    locations: Mixed,
    companies: [
        {
            type: ObjectId,
            ref: 'company'
        }
    ],
    design: Mixed,
    views: {
        type: Number,
        default: 0
    },
    customerId: {
        type: String,
        createIndexes: { unique: true }
    },
    settings: Mixed,
    subscription: {
        id: String,
        status: String,
        company: { type: ObjectId, ref: 'company' }
    },
    referredBy: {
        type: ObjectId,
        ref: 'user'
    },
    reseller: Mixed
}, {
    toJSON: { virtuals: true },
    timestamps: { createdAt: 'createdAt' }
});
exports.default = mongoose_1.default.model('user', UserSchema);
//# sourceMappingURL=user.schema.js.map