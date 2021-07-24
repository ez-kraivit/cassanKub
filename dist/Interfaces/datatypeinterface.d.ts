export { OptionType, QueryType, ParameterType };
interface ParameterType {
    [key: string]: {
        [key: string]: string | boolean | number;
    } | any;
}
interface OptionType {
    tableName: string;
    timestamps?: boolean;
    indexes?: Array<string>;
    force?: boolean;
}
declare type OperatorType = boolean | string | number | Date;
interface QueryType {
    select?: Array<string>;
    where?: SubWhere | {
        [key: string]: Array<OperatorType> | OperatorType;
    } | {
        [key: string]: {
            [key: string]: OperatorType;
        };
    };
    tableName?: string;
    offset?: number;
    limit?: number;
}
interface SubWhere {
    [key: string]: {
        [key: string]: string;
    };
}
