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
exports.Model = exports.DataType = void 0;
const cassandradriver = require("cassandra-driver");
const Uuid = require("cassandra-driver/lib/types/uuid");
const error_1 = require("./messages/error");
const LowQuery_1 = require("./LowQuery");
const DataType_1 = require("./DataType");
exports.DataType = DataType_1.default;
const Model_1 = require("./Model");
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return Model_1.Model; } });
class cassankub extends LowQuery_1.LowQuery {
    static init(ClientOption, showlog = true) {
        return __awaiter(this, void 0, void 0, function* () {
            cassankub.db = new cassandradriver.Client(ClientOption);
            if (showlog)
                cassankub.log = error_1._success.Connect;
            (typeof (yield cassankub.db.connect()) == 'undefined') ? cassankub.log : cassankub.log = error_1._error.Connect;
            return cassankub.db;
        });
    }
}
exports.default = cassankub;
cassankub.uuid = Uuid.random();
