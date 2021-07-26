import { QueryType, ArrayOption, KeyOption } from './Interfaces/datatypeinterface';
export declare class HightQuery {
    static _taboo: Array<string>;
    static _cql: string;
    static _allow: boolean;
    static mappingSelect(tableName: string, state: Array<string>, query?: QueryType): typeof HightQuery;
    static find(tableName: string, state: Array<string>, query?: QueryType, projection?: boolean): Promise<any>;
    static create(tableName: string, state: Array<string>, timestamps: boolean, querye?: KeyOption | ArrayOption): Promise<KeyOption | ArrayOption>;
    static update(tableName: string, state: Array<string>, timestamps: boolean, querye?: {
        sets: KeyOption | ArrayOption;
        wheres?: KeyOption | ArrayOption;
    }): Promise<any[]>;
}
