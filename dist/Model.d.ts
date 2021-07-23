export declare class Model {
    private static options;
    private static parameter;
    private static get;
    private static tableName;
    private static cql;
    private static timestamps;
    private static state;
    private static indexes;
    private static mappingTimestamps;
    static init(parameter: any, options: any): typeof Model;
    private static mappingCQL;
    private static mappingPKey;
    private static mappingIndex;
    static sync(option?: {
        force: boolean;
    }): Promise<typeof Model>;
}
