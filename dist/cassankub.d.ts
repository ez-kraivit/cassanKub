/// <reference types="node" />
import { ClientOptions } from './Interfaces/SettingInterface';
import { LogConnectionInterface } from './Interfaces/ErrorInterface';
import { LowQuery } from './LowQuery';
import DataType from './DataType';
import { Model } from './Model';
export { DataType, Model };
export default class cassankub extends LowQuery {
    static uuid: Buffer;
    static db: any;
    static log: LogConnectionInterface;
    static init(ClientOption: ClientOptions, showlog?: boolean): Promise<any>;
}
