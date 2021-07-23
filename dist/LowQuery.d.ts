export declare class DataType {
    static STRING: string;
    static UUID: string;
    static INT: string;
    static TEXT: string;
    static FLOAT: string;
    static BOOLEAN: string;
    static BIGINT: string;
    static BLOB: string;
    static ASCII: string;
    static DECIMAL: string;
    static DOUBLE: string;
    static TIMESTAMP: string;
}
export declare class LowQuery extends DataType {
    static CreateTable(tablename: string): Promise<typeof LowQuery>;
    static DeleteTable(tablename: string): Promise<typeof LowQuery>;
    static CreateIndex(tablename: string, attribute: string, condition: string): Promise<typeof LowQuery>;
}
