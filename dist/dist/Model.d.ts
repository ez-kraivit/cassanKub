export var __esModule: boolean;
export function Model(): void;
export namespace Model {
    function mappingTimestamps(parameter: any, option: any): {
        (): void;
        mappingTimestamps(parameter: any, option: any): any;
        init(parameter: any, options: any): this;
        mappingCQL(parameter: any, option: any): any;
        mappingPKey(parameter: any): string[];
        mappingIndex(tablename: any, parameter: any, condition: any): any;
        sync(option: any): any;
        find(query: any, projection: any): any;
        create(query: any): any;
        update(query: any): any;
    };
    function init(parameter: any, options: any): this;
    function mappingCQL(parameter: any, option: any): {
        (): void;
        mappingTimestamps(parameter: any, option: any): any;
        init(parameter: any, options: any): this;
        mappingCQL(parameter: any, option: any): any;
        mappingPKey(parameter: any): string[];
        mappingIndex(tablename: any, parameter: any, condition: any): any;
        sync(option: any): any;
        find(query: any, projection: any): any;
        create(query: any): any;
        update(query: any): any;
    };
    function mappingPKey(parameter: any): string[];
    function mappingIndex(tablename: any, parameter: any, condition: any): any;
    function sync(option: any): any;
    function find(query: any, projection: any): any;
    function create(query: any): any;
    function update(query: any): any;
}
