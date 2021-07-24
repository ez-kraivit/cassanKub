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
class HightQuery {
    static mappingSelect(tableName, state, query) {
        let where = [];
        if (query.where) {
            Object.keys(query.where).map((data) => {
                if (Array.isArray(query.where[data]) == true)
                    where.push(` ${data} in (${query.where[data]})`);
                else if (typeof query.where[data] == 'string')
                    where.push(`${data} = ${query.where[data]}`);
                else {
                    Object.keys(query.where[data]).map((index) => {
                        if (index == 'gt')
                            where.push(`${data} > ${query.where[data][index]}`);
                        if (index == 'gte')
                            where.push(`${data} >= ${query.where[data][index]}`);
                        if (index == 'lt')
                            where.push(`${data} < ${query.where[data][index]}`);
                        if (index == 'lte')
                            where.push(`${data} <= ${query.where[data][index]}`);
                    });
                }
            });
        }
        this._cql = `SELECT ${(Array.isArray(query.select)) ? query.select.map(x => x).join(', ') :
            state.map(x => x).join(', ')} FROM ${(typeof query.tableName == 'undefined') ? tableName : tableName + ' AS ' + query.tableName} WHERE ${(where) ? where.map(data => data).join(' AND ') + ' ' : ``} ${(query.limit) ? 'LIMIT ' + query.limit : ``}  ;`;
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
//# sourceMappingURL=HightQuery.js.map