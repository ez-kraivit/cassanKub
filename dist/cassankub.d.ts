/// <reference types="node" />
import { v4 as uuid } from 'uuid';
import { ClientOptions } from './Interfaces/SettingInterface';
import { LogConnectionInterface } from './Interfaces/ErrorInterface';
import { LowQuery } from './LowQuery';
import DataType from './DataType';
import { Model } from './Model';
export default class cassankub extends LowQuery {
    static db: any;
    static _keyspace: string;
    static _log: LogConnectionInterface;
    static init(ClientOption: ClientOptions, showlog?: boolean): Promise<any>;
    static validate(uuid: string | Buffer | any): boolean;
}
export { DataType, Model, cassankub, uuid };
