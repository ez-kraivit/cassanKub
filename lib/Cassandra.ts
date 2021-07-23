import * as cassandradriver from 'cassandra-driver'
import * as Uuid from 'cassandra-driver/lib/types/uuid'
import { ClientOptions } from './Interfaces/SettingInterface'
import { LogConnectionInterface } from './Interfaces/ErrorInterface'
import { _error, _success } from './messages/error'
import { LowQuery } from './LowQuery'
import {DataType} from './LowQuery'
import {Model} from './Model'
export { DataType , Model } 

export default class Cassandra extends LowQuery {

    public static uuid: Buffer = Uuid.random()

    public static db: any;

    public static log: LogConnectionInterface

    public static async init(ClientOption: ClientOptions, showlog: boolean = true) {
        Cassandra.db = new cassandradriver.Client(ClientOption)
        if (showlog) Cassandra.log = _success.Connect;
        (typeof await Cassandra.db.connect() == 'undefined') ? Cassandra.log : Cassandra.log = _error.Connect
        return Cassandra.db
    }
}
