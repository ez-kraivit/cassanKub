/// <reference types="node" />
export { OptionType, QueryType, ParameterType, KeyOption, ArrayOption, BatchOption };
interface ParameterType {
    [key: string]: {
        [key: string]: string | boolean | number;
    } | any;
}
interface OptionType {
    tableName: string;
    timestamps?: boolean;
    indexes?: Array<string>;
}
declare type OperatorType = boolean | string | number | Date;
interface QueryType {
    select?: Array<string>;
    where?: SubWhere | {
        [key: string]: Array<OperatorType> | OperatorType | Object;
    } | {
        [key: string]: {
            [key: string]: OperatorType;
        };
    };
    tableName?: string;
    offset?: number;
    limit?: number;
}
interface KeyOption {
    [key: string]: string | number | boolean | Buffer | any;
}
interface ArrayOption {
    [key: string]: KeyOption;
}
interface BatchOption {
    update?: Array<{
        set: ArrayOption | KeyOption;
        where?: ArrayOption | KeyOption;
    }>;
    create?: Array<{
        [key: string]: string | Boolean | number | Date;
    }>;
    delete?: any;
}
interface SubWhere {
    [key: string]: {
        [key: string]: string;
    };
}
