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
exports.LowQuery = exports.DataType = void 0;
const Cassandra_1 = require("./Cassandra");
class DataType {
}
exports.DataType = DataType;
DataType.STRING = 'text';
DataType.UUID = 'uuid';
DataType.INT = 'int';
DataType.TEXT = 'text';
DataType.FLOAT = 'float';
DataType.BOOLEAN = 'boolean';
DataType.BIGINT = 'bigint';
DataType.BLOB = 'blob';
DataType.ASCII = 'ascii';
DataType.DECIMAL = 'decimal';
DataType.DOUBLE = 'double';
DataType.TIMESTAMP = 'timestamp';
class LowQuery extends DataType {
    static CreateTable(tablename) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cassandra_1.default.db.execute(tablename).then(() => {
                console.log(`CREATE ${tablename} successfully.`);
            }).catch((err) => {
                console.log(err.info + " query " + err.query);
            });
            return this;
        });
    }
    static DeleteTable(tablename) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cassandra_1.default.db.execute(`DROP TABLE ${tablename}`).then(() => {
                console.log(`DROP TABLE ${tablename} successfully.`);
            }).catch((err) => {
                console.log(err.info + " query " + err.query);
            });
            return this;
        });
    }
    static CreateIndex(tablename, attribute, condition) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Cassandra_1.default.db.execute(`CREATE INDEX ${condition} ${attribute}_idx ON ${tablename} ( ${attribute} )`).then(() => {
                console.log(`CREATE INDEX ${attribute}_idx ON ${tablename} ( ${attribute} ) successfully.`);
            }).catch((err) => {
                console.log(err.info + " query " + err.query);
            });
            return this;
        });
    }
}
exports.LowQuery = LowQuery;
//# sourceMappingURL=LowQuery.js.map