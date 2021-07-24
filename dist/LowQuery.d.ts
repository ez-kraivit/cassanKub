import DataType from "./DataType";
export declare class LowQuery extends DataType {
    static report: {
        [key: string]: any;
    } | string;
    static CreateTable(tablename: string): Promise<typeof LowQuery>;
    static DeleteTable(tablename: string): Promise<typeof LowQuery>;
    static CreateIndex(tablename: string, attribute: string, condition: string): Promise<typeof LowQuery>;
    static ReadDataCustomer(queries: any): Promise<any>;
}
