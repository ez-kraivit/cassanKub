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
const LowQuery_2 = require("./LowQuery");
Object.defineProperty(exports, "DataType", { enumerable: true, get: function () { return LowQuery_2.DataType; } });
const Model_1 = require("./Model");
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return Model_1.Model; } });
class Cassandra extends LowQuery_1.LowQuery {
    static init(ClientOption, showlog = true) {
        return __awaiter(this, void 0, void 0, function* () {
            Cassandra.db = new cassandradriver.Client(ClientOption);
            if (showlog)
                Cassandra.log = error_1._success.Connect;
            (typeof (yield Cassandra.db.connect()) == 'undefined') ? Cassandra.log : Cassandra.log = error_1._error.Connect;
            return Cassandra.db;
        });
    }
}
exports.default = Cassandra;
Cassandra.uuid = Uuid.random();
//# sourceMappingURL=Cassandra.js.map