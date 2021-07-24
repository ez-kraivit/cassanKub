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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const lowquery_1 = require("./lowquery");
const HightQuery_1 = require("./HightQuery");
class Model {
    static mappingTimestamps(parameter, option) {
        this._tableName = option.tableName;
        this._timestamps = option.timestamps;
        if (option.timestamps) {
            parameter.created_by = { type: lowquery_1.LowQuery.STRING };
            parameter.created_at = { type: lowquery_1.LowQuery.TIMESTAMP };
            parameter.updated_by = { type: lowquery_1.LowQuery.STRING };
            parameter.updated_at = { type: lowquery_1.LowQuery.TIMESTAMP };
        }
        return Model;
    }
    static init(parameter, options) {
        this.mappingTimestamps(parameter, options);
        this._options = options;
        this._indexes = options.indexes;
        this._parameter = parameter;
        this._state = Object.keys(parameter).map((data) => `${data}`);
        this._options = options;
        this.mappingCQL(parameter, options);
        return this;
    }
    static mappingCQL(parameter, option) {
        const filtered = this.mappingPKey(parameter);
        this._cql = `CREATE TABLE ${(option.tableName)} (` + Object.keys(parameter).map((data) => `${data} ${(parameter[data].type) ? parameter[data].type : ''}`).join(', ') + ', PRIMARY KEY (' + filtered.map(data => `${data}`).join(', ') + `)) `;
        return Model;
    }
    static mappingPKey(parameter) {
        return Object.keys(parameter).filter((element) => { return parameter[element].primaryKey; });
    }
    static mappingIndex(tablename, parameter, condition) {
        return parameter.map((data) => {
            lowquery_1.LowQuery.CreateIndex(tablename, data, condition);
        });
    }
    static sync(option) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof option == 'undefined') {
                `CREATE TABLE IF NOT EXISTS ` + this._cql.substr(12, this._cql.length);
                yield lowquery_1.LowQuery.CreateTable(this._cql);
                if (this._indexes)
                    this.mappingIndex(this._tableName, this._indexes, "");
            }
            else
                yield lowquery_1.LowQuery.DeleteTable(this._tableName).then(() => {
                    lowquery_1.LowQuery.CreateTable(this._cql).then(() => {
                        if (this._indexes)
                            Model.mappingIndex(this._tableName, this._indexes, "IF NOT EXISTS");
                    });
                });
            return Model;
        });
    }
    static find(query, projection) {
        return __awaiter(this, void 0, void 0, function* () {
            return HightQuery_1.HightQuery.find(this._tableName, this._state, query, projection);
        });
    }
}
exports.Model = Model;
