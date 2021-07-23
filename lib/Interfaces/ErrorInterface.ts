export type callback = (err:Error) => void;
export interface LogConnectionInterface{
    status?:boolean;
    message?:string;
    error?:callback;
}