
import { OptionType } from './Interfaces/DatatypeInterface'
import { LowQuery } from './LowQuery'

export class Model {
    private static options: any
    private static parameter: any
    private static get: any
    private static tableName: string
    private static cql: string
    private static timestamps: string
    private static state: any
    private static indexes: any

    private static mappingTimestamps(parameter, option) {
        this.tableName = option.tableName
        this.timestamps = option.timestamps
        if (option.timestamps) {
            parameter.created_by = { type: LowQuery.STRING }
            parameter.created_at = { type: LowQuery.TIMESTAMP }
            parameter.updated_by = { type: LowQuery.STRING }
            parameter.updated_at = { type: LowQuery.TIMESTAMP }
        }
    }

    static init(parameter, options: any) {
        this.mappingTimestamps(parameter, options)
        this.options = options
        this.indexes = options.indexes
        this.parameter = parameter
        this.state = Object.keys(parameter).map((data) => `${data}`)
        this.options = options
        this.mappingCQL(parameter, options)
        return Model
    }
    private static mappingCQL(parameter, option: OptionType) {
        const filtered = this.mappingPKey(parameter)
        this.cql = `CREATE TABLE ${(option.tableName)} (` + Object.keys(parameter).map((data) => `${data} ${(parameter[data].type) ? parameter[data].type : ''}`).join(', ') + ', PRIMARY KEY (' + filtered.map(data => `${data}`).join(', ') + `)) `
    }

    private static mappingPKey(parameter: { [key: string]: any }) {
        return Object.keys(parameter).filter((element) => { return parameter[element].primaryKey; });
    }
    private static mappingIndex(tablename: string, parameter: { [key: string]: any },condition:string) {
        return parameter.map((data: string) => {
            LowQuery.CreateIndex(tablename, data,condition)
        })
    }
    static async sync(option?:{force:boolean}) {                                
        if (typeof option == 'undefined') {
            `CREATE TABLE IF NOT EXISTS ` + this.cql.substr(12, this.cql.length)
            await LowQuery.CreateTable(this.cql);
            if (this.indexes) this.mappingIndex(this.tableName, this.indexes,"")
        } else await LowQuery.DeleteTable(this.tableName).then(() => {
            LowQuery.CreateTable(this.cql).then(() => {
                if (this.indexes) Model.mappingIndex(this.tableName, this.indexes,"IF NOT EXISTS")
            })
        })
        return this
    }
}


        // return {
        //     cql: this.cql,
        //     tablename: this.tableName,
        //     state: this.state,
        //     parameter:this.parameter,
        //     timestamps:this.timestamps,
        //     indexes:this.indexes,
        //     sync: this.sync,
        //     model:Model
        // }