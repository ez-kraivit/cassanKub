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
exports.HightQuery = void 0;
const LowQuery_1 = require("./LowQuery");
const cassankub_1 = require("./cassankub");
class HightQuery {
    static mappingSelect(tableName, state, query) {
        let where = [], currentArray = [];
        if (query.where) {
            Object.keys(query.where).map((data) => {
                if (typeof query.where[data] == 'string' && cassankub_1.default.validate(query.where[data]))
                    where.push(`${data} = ${query.where[data]}`);
                else if (Array.isArray(query.where[data]) == true) {
                    Object.keys(query.where[data]).map((item) => { currentArray.push((typeof query.where[data][item] == 'number' || typeof query.where[data][item] == 'object' || typeof query.where[data][item] == 'boolean') ? query.where[data][item] : `'` + query.where[data][item] + `'`); });
                    where.push(data + " in (" + Object.keys(currentArray).map(item => `${currentArray[item]}`).join(' , ') + ")");
                    this._allow = true;
                }
                else if (typeof query.where[data] == 'string' || typeof query.where[data] == 'number' || typeof query.where[data] == 'object' || typeof query.where[data] == 'boolean')
                    where.push(`${data} = ${(typeof query.where[data] == 'number' || typeof query.where[data] == 'boolean') ? query.where[data] : "'" + query.where[data] + "'"}`);
                else {
                    Object.keys(query.where[data]).map((index) => {
                        if (index == 'and')
                            where.push(`${data} = ${(typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"}`);
                        if (index == 'gt')
                            where.push(`${data} > ${(typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"}`);
                        if (index == 'gte')
                            where.push(`${data} >= ${(typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"}`);
                        if (index == 'lt')
                            where.push(`${data} < ${(typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"}`);
                        if (index == 'lte')
                            where.push(`${data} <= ${(typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"}`);
                    });
                }
            });
        }
        this._cql = `SELECT ${(Array.isArray(query.select)) ? query.select.map(x => x).join(', ') :
            state.map(x => x).join(', ')} FROM ${(typeof query.tableName == 'undefined') ? tableName : tableName + ' AS ' + query.tableName} WHERE ${(where) ? where.map(data => data).join(' AND ') + ' ' : ``} ${(query.limit) ? 'LIMIT ' + query.limit : ``} ${(this._allow) ? 'ALLOW FILTERING' : ''};`;
        console.log(this._cql);
        this._allow = false;
        return HightQuery;
    }
    static find(tableName, state, query, projection) {
        return __awaiter(this, void 0, void 0, function* () {
            let statesB = [], statesA = [];
            state.map((x) => { if (x)
                statesB.push(x); });
            this._taboo.map(x => delete statesB[statesB.indexOf(x)]);
            statesB.map((x) => { if (x)
                statesA.push(x); });
            if (query.where)
                this.mappingSelect(tableName, statesA, query);
            else
                this.mappingSelect(tableName, statesA, query);
            return yield LowQuery_1.LowQuery.ReadDataCustomer(this._cql);
        });
    }
}
exports.HightQuery = HightQuery;
HightQuery._taboo = ['password', 'id'];
HightQuery._allow = false;
//# sourceMappingURL=HightQuery.js.map