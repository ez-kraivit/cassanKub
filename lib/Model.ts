import { OptionType } from './Interfaces/DatatypeInterface'
export class Model {
    
    private static _sql: any

    public static _state:Array<any>

    public static init(parameter, option: OptionType) {
        Model._state = Object.keys(parameter).map((data)=>`${data}`)
        return new Model().mappingCQL(parameter, option)
    }

    public static sync(option?) {
        return (!option) ? `CREATE TABLE IF NOT EXISTS `+Model._sql.substr(12, Model._sql.length) :  Model._sql   
    }

    protected mappingCQL(parameter, option: OptionType) {
        const filtered = Object.keys(parameter).filter((element)=> { return parameter[element].primaryKey; });
        return Model._sql = `CREATE TABLE ${(option.tableName)} (` + Object.keys(parameter).map((data) => `${data} ${(parameter[data].type) ? parameter[data].type : ''}`).join(', ') + ', PRIMARY KEY (' + filtered.map(data => `${data}`).join(', ') + `)) `
    }
}


