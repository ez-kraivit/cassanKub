import * as cassandradriver from 'cassandra-driver'
import * as Uuid from 'cassandra-driver/lib/types/uuid'
import { ClientOptions } from './Interfaces/SettingInterface'
import { ErrorInterface } from './Interfaces/ErrorInterface'
import { _error, _success } from './messages/error'
import { LowQuery } from './LowQuery'
import {DataType} from './LowQuery'
import {Model} from './Model'
export { DataType , Model } 

export default class Cassandra extends LowQuery {

    public static uuid: Buffer = Uuid.random()

    protected static db: any;

    public static ErrorLog: ErrorInterface

    public static async init(ClientOption: ClientOptions, showlog: boolean = true) {
        Cassandra.db = new cassandradriver.Client(ClientOption)
        if (showlog) Cassandra.ErrorLog = _success.Connect;
        (typeof await Cassandra.db.connect() == 'undefined') ? Cassandra.ErrorLog : Cassandra.ErrorLog = _error.Connect
        return Cassandra.db
    }
}
