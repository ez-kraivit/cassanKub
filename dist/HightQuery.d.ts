import { QueryType } from './Interfaces/datatypeinterface';
export declare class HightQuery {
    static _taboo: Array<string>;
    static _cql: string;
    static _allow: boolean;
    static mappingSelect(tableName: string, state: Array<string>, query?: QueryType): typeof HightQuery;
    static find(tableName: string, state: Array<string>, query?: QueryType, projection?: boolean): Promise<any>;
}
