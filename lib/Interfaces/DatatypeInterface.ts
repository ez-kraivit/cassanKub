export {
    OptionType
 }

interface OptionType {
    tableName:string
    timestamps?:boolean
    indexes?:Array<string>
}