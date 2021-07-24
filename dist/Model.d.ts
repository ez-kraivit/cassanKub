import { OptionType, QueryType, ParameterType } from './Interfaces/datatypeinterface';
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
    static sync(option?: OptionType): Promise<typeof Model>;
    static find(query?: QueryType, projection?: boolean): Promise<any>;
}
