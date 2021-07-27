import { QueryType, ArrayOption, KeyOption, BatchOption } from './Interfaces/DatatypeInterface';
export declare class HightQuery {
    static _taboo: Array<string>;
    static _cql: string;
    static _allow: boolean;
    static mappingSelect(tableName: string, state: Array<string>, query?: QueryType): typeof HightQuery;
    static find(tableName: string, state: Array<string>, query?: QueryType, projection?: boolean): Promise<any>;
    static create(tableName: string, timestamps: boolean, querye?: KeyOption | ArrayOption): Promise<KeyOption | ArrayOption>;
    static update(tableName: string, timestamps: boolean, querye?: {
        set: KeyOption | ArrayOption;
        where?: KeyOption | ArrayOption;
    } | KeyOption | ArrayOption): Promise<any[]>;
    static delete(tableName: string, timestamps: boolean, querye?: KeyOption | ArrayOption): Promise<any[]>;
    static batch(tableName: string, timestamps: boolean, query?: BatchOption): Promise<void>;
}
