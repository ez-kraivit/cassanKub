"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.HightQuery = void 0;
var LowQuery_1 = require("./LowQuery");
var cassankub_1 = require("./cassankub");
var HightQuery = (function () {
    function HightQuery() {
    }
    HightQuery.mappingSelect = function (tableName, state, query) {
        var _this = this;
        var where = [], currentArray = [];
        if (query.where) {
            Object.keys(query.where).map(function (data) {
                if (typeof query.where[data] == 'string' && cassankub_1["default"].validate(query.where[data]))
                    where.push(data + " = " + query.where[data]);
                else if (Array.isArray(query.where[data]) == true) {
                    Object.keys(query.where[data]).map(function (item) { currentArray.push((typeof query.where[data][item] == 'number' || typeof query.where[data][item] == 'object' || typeof query.where[data][item] == 'boolean') ? query.where[data][item] : "'" + query.where[data][item] + "'"); });
                    where.push(data + " in (" + Object.keys(currentArray).map(function (item) { return "" + currentArray[item]; }).join(' , ') + ")");
                    _this._allow = true;
                }
                else if (typeof query.where[data] == 'string' || typeof query.where[data] == 'number' || typeof query.where[data] == 'object' || typeof query.where[data] == 'boolean')
                    where.push(data + " = " + ((typeof query.where[data] == 'number' || typeof query.where[data] == 'boolean') ? query.where[data] : "'" + query.where[data] + "'"));
                else {
                    Object.keys(query.where[data]).map(function (index) {
                        if (index == 'and')
                            where.push(data + " = " + ((typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"));
                        if (index == 'gt')
                            where.push(data + " > " + ((typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"));
                        if (index == 'gte')
                            where.push(data + " >= " + ((typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"));
                        if (index == 'lt')
                            where.push(data + " < " + ((typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"));
                        if (index == 'lte')
                            where.push(data + " <= " + ((typeof query.where[data][index] == 'number' || typeof query.where[data][index] == 'object' || typeof query.where[data][index] == 'boolean') ? query.where[data][index] : "'" + query.where[data][index] + "'"));
                    });
                }
            });
        }
        var cql = "SELECT " + ((Array.isArray(query.select)) ? query.select.map(function (x) { return x; }).join(', ') :
            state.map(function (x) { return x; }).join(', ')) + " FROM " + ((typeof query.tableName == 'undefined') ? tableName : tableName + ' AS ' + query.tableName) + " WHERE " + ((where) ? where.map(function (data) { return data; }).join(' AND ') + ' ' : "") + " " + ((query.limit) ? 'LIMIT ' + query.limit : "") + " " + ((this._allow) ? 'ALLOW FILTERING' : '');
        this._cql = LowQuery_1.LowQuery.StringSub(cql);
        this._allow = false;
        return HightQuery;
    };
    HightQuery.find = function (tableName, state, query, projection) {
        return __awaiter(this, void 0, void 0, function () {
            var statesB, statesA;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statesB = [], statesA = [];
                        state.map(function (x) {
                            if (x)
                                statesB.push(x);
                        });
                        this._taboo.map(function (x) { return delete statesB[statesB.indexOf(x)]; });
                        statesB.map(function (x) {
                            if (x)
                                statesA.push(x);
                        });
                        if (query.where)
                            this.mappingSelect(tableName, statesA, query);
                        else
                            this.mappingSelect(tableName, statesA, query);
                        return [4, LowQuery_1.LowQuery.ReadDataCustomer(this._cql)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    HightQuery.create = function (tableName, state, timestamps, querye) {
        return __awaiter(this, void 0, void 0, function () {
            var queries, params_1, querys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queries = [];
                        if (Array.isArray(querye)) {
                            querye.map(function (item) {
                                var params = [], querys;
                                querys = "INSERT INTO " + tableName + " (" + Object.keys(item).map(function (key) { return "" + key; }).join(',') + ((timestamps) ? ',created_at' : '') + ") VALUES (" + Object.keys(item).map(function (key) { return "?"; }).join(',') + ((timestamps) ? ',?' : '') + ")";
                                Object.keys(item).map(function (key) { return params.push(item[key]); });
                                if (timestamps)
                                    params.push(new Date());
                                queries.push({ query: querys, params: params });
                            });
                        }
                        else {
                            params_1 = [], querys = void 0;
                            querys = "INSERT INTO " + tableName + " (" + Object.keys(querye).map(function (key) { return key; }).join(',') + " " + ((timestamps) ? ',created_at' : '') + ") VALUES (" + Object.keys(querye).map(function (key) { return '?'; }).join(',') + ((timestamps) ? ',?' : '') + ")";
                            Object.keys(querye).map(function (key) { return params_1.push(querye[key]); });
                            if (timestamps)
                                params_1.push(new Date());
                            queries.push({ query: querys, params: params_1 });
                        }
                        return [4, LowQuery_1.LowQuery.BatchData(queries)];
                    case 1:
                        _a.sent();
                        return [2, querye];
                }
            });
        });
    };
    HightQuery.update = function (tableName, state, timestamps, querye) {
        return __awaiter(this, void 0, void 0, function () {
            var queries, params, querys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queries = [];
                        params = [];
                        querys = "UPDATE " + tableName + " SET " + Object.keys(querye.sets).map(function (key) { return key + "=?"; }).join(',') + " " + ((timestamps) ? ',updated_at=?' : '') + " " + ((querye.wheres) ? 'WHERE' : '') + " " + ((querye.wheres) ? Object.keys(querye.wheres).map(function (key) { return key + "=?"; }).join(' AND ') : '');
                        Object.keys(querye.sets).map(function (key) { return params.push(querye.sets[key]); });
                        if (timestamps)
                            params.push(new Date());
                        if (querye.wheres)
                            Object.keys(querye.wheres).map(function (key) { return params.push(querye.wheres[key]); });
                        queries.push({ query: querys, params: params });
                        return [4, LowQuery_1.LowQuery.BatchData(queries)];
                    case 1:
                        _a.sent();
                        return [2, queries];
                }
            });
        });
    };
    HightQuery._taboo = ['password', 'id'];
    HightQuery._allow = false;
    return HightQuery;
}());
exports.HightQuery = HightQuery;
//# sourceMappingURL=HightQuery.js.map