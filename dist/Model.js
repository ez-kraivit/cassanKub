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
const LowQuery_1 = require("./LowQuery");
class Model {
    static mappingTimestamps(parameter, option) {
        this.tableName = option.tableName;
        this.timestamps = option.timestamps;
        if (option.timestamps) {
            parameter.created_by = { type: LowQuery_1.LowQuery.STRING };
            parameter.created_at = { type: LowQuery_1.LowQuery.TIMESTAMP };
            parameter.updated_by = { type: LowQuery_1.LowQuery.STRING };
            parameter.updated_at = { type: LowQuery_1.LowQuery.TIMESTAMP };
        }
    }
    static init(parameter, options) {
        this.mappingTimestamps(parameter, options);
        this.options = options;
        this.indexes = options.indexes;
        this.parameter = parameter;
        this.state = Object.keys(parameter).map((data) => `${data}`);
        this.options = options;
        this.mappingCQL(parameter, options);
        return Model;
    }
    static mappingCQL(parameter, option) {
        const filtered = this.mappingPKey(parameter);
        this.cql = `CREATE TABLE ${(option.tableName)} (` + Object.keys(parameter).map((data) => `${data} ${(parameter[data].type) ? parameter[data].type : ''}`).join(', ') + ', PRIMARY KEY (' + filtered.map(data => `${data}`).join(', ') + `)) `;
    }
    static mappingPKey(parameter) {
        return Object.keys(parameter).filter((element) => { return parameter[element].primaryKey; });
    }
    static mappingIndex(tablename, parameter, condition) {
        return parameter.map((data) => {
            LowQuery_1.LowQuery.CreateIndex(tablename, data, condition);
        });
    }
    static sync(option) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof option == 'undefined') {
                `CREATE TABLE IF NOT EXISTS ` + this.cql.substr(12, this.cql.length);
                yield LowQuery_1.LowQuery.CreateTable(this.cql);
                if (this.indexes)
                    this.mappingIndex(this.tableName, this.indexes, "");
            }
            else
                yield LowQuery_1.LowQuery.DeleteTable(this.tableName).then(() => {
                    LowQuery_1.LowQuery.CreateTable(this.cql).then(() => {
                        if (this.indexes)
                            Model.mappingIndex(this.tableName, this.indexes, "IF NOT EXISTS");
                    });
                });
            return this;
        });
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map