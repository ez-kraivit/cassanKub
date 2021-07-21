export type callback = (err:Error) => void;
export interface ErrorInterface{
    status?:boolean;
    message?:string;
    error?:callback;
}