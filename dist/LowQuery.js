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
exports.LowQuery = void 0;
const cassankub_1 = require("./cassankub");
const DataType_1 = require("./DataType");
class LowQuery extends DataType_1.default {
    static CreateTable(tablename) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cassankub_1.default.db.execute(tablename).then(() => {
                console.info(`CREATE ${tablename} successfully.`);
            }).catch((err) => {
                console.info(err.info + " query " + err.query);
            });
            return this;
        });
    }
    static DeleteTable(tablename) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cassankub_1.default.db.execute(`DROP TABLE ${tablename}`).then(() => {
                console.info(`DROP TABLE ${tablename} successfully.`);
            }).catch((err) => {
                console.info(err.info + " query " + err.query);
            });
            return this;
        });
    }
    static CreateIndex(tablename, attribute, condition) {
        return __awaiter(this, void 0, void 0, function* () {
            yield cassankub_1.default.db.execute(`CREATE INDEX ${condition} ${attribute}_idx ON ${tablename} ( ${attribute} )`).then(() => {
                console.info(`CREATE INDEX ${attribute}_idx ON ${tablename} ( ${attribute} ) successfully.`);
            }).catch((err) => {
                console.info(err.info + " query " + err.query);
            });
            return this;
        });
    }
    static ReadDataCustomer(queries) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cassankub_1.default.db.execute(`${queries}`).then((result) => {
                if (Object.keys(result.rows).length == 1)
                    this.report = result.rows[0];
                else
                    this.report = result.rows;
                return this.report;
            }).catch((err) => {
                this.report = null;
            });
        });
    }
}
exports.LowQuery = LowQuery;
