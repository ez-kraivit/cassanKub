import { QueryType, ParameterType, KeyOption, ArrayOption } from './Interfaces/datatypeinterface';
export declare class Model {
    private static _options;
    private static _parameter;
    private static _tableName;
    private static _cql;
    private static _timestamps;
    private static _state;
    private static _indexes;
    private static mappingTimestamps;
    static init(parameter: ParameterType, options: any): typeof Model;
    private static mappingCQL;
    private static mappingPKey;
    private static mappingIndex;
    static sync(option?: {
        force: boolean;
    }): Promise<typeof Model>;
    static find(query?: QueryType, projection?: boolean): Promise<any>;
    static create(query?: KeyOption | ArrayOption): Promise<KeyOption | ArrayOption>;
    static update(query?: {
        sets: KeyOption | ArrayOption;
        wheres?: KeyOption | ArrayOption;
    }): Promise<any[]>;
}
