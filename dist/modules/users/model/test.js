"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
exports.Schema = mongoose.Schema;
exports.ObjectId = mongoose.Schema.Types.ObjectId;
exports.Mixed = mongoose.Schema.Types.Mixed;
let schema = new exports.Schema({
    name: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    amountPeopleSaved: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});
exports.HeroSchema = mongoose.model('hero', schema, 'heroes', true);
class HeroModel {
    constructor(heroModel) {
        this._heroModel = heroModel;
    }
    get name() {
        return this._heroModel.name;
    }
    get power() {
        return this._heroModel.power;
    }
    get amountPeopleSaved() {
        return this._heroModel.amountPeopleSaved;
    }
    static createHero(name, power) {
        let p = new Promise((resolve, reject) => {
            let repo = new HeroRepository();
            let hero = {
                name: name,
                power: power,
                amountPeopleSaved: 0
            };
            repo.create(hero, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    }
    static findHero(name) {
        let p = new Promise((resolve, reject) => {
            let repo = new HeroRepository();
            repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
        return p;
    }
}
exports.HeroModel = HeroModel;
Object.seal(HeroModel);
class RepositoryBase {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item, callback) {
        this._model.create(item, callback);
    }
    retrieve(callback) {
        this._model.find({}, callback);
    }
    update(_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    }
    delete(_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }
    findById(_id, callback) {
        this._model.findById(_id, callback);
    }
    findOne(cond, callback) {
        return this._model.findOne(cond, callback);
    }
    find(cond, fields, options, callback) {
        return this._model.find(cond, options, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.RepositoryBase = RepositoryBase;
class HeroRepository extends RepositoryBase {
    constructor() {
        super(exports.HeroSchema);
    }
}
exports.HeroRepository = HeroRepository;
Object.seal(HeroRepository);
let uri = 'mongodb://localhost/heroes';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
HeroModel.createHero('Steve', 'Flying').then((res) => {
    console.log('### Created Hero ###');
    console.log(res);
    HeroModel.findHero('Steve').then((res) => {
        console.log('### Found Hero ###');
        console.log(res);
        let hero = res;
        hero.power = 'Invisibility';
        hero.save((err, res) => {
            if (err) {
                console.log(err.message);
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }, (err) => {
        if (err) {
            console.log(err.message);
        }
    });
}, (err) => {
    if (err) {
        console.log(err.message);
        console.log(err);
    }
});
//# sourceMappingURL=test.js.map