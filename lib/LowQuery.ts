import Cassandra from "./Cassandra"
export class DataType {

    public static STRING: string = 'text'

    public static UUID: string = 'uuid'

    public static INT: string = 'int'

    public static TEXT: string = 'text'

    public static FLOAT: string = 'float'

    public static BOOLEAN: string = 'boolean'

    public static BIGINT: string = 'bigint'

    public static BLOB: string = 'blob'

    public static ASCII: string = 'ascii'

    public static DECIMAL: string = 'decimal'

    public static DOUBLE: string = 'double'

    public static TIMESTAMP: string = 'timestamp'
}
export class LowQuery extends DataType {

    public static async CreateTable(tablename: string) {
        await Cassandra.db.execute(tablename).then(() => {
            console.log(`CREATE ${tablename} successfully.`);
        }).catch((err: { [key: string]: string }) => {
            console.log(err.info + " query " + err.query);
        })
        return this
    }

    public static async DeleteTable(tablename: string) {
        await Cassandra.db.execute(`DROP TABLE ${tablename}`).then(() => {
            console.log(`DROP TABLE ${tablename} successfully.`);
        }).catch((err: { [key: string]: string }) => {
            console.log(err.info + " query " + err.query);
        })
        return this
    }

    public static async CreateIndex(tablename: string, attribute: string,condition:string) {
        await Cassandra.db.execute(`CREATE INDEX ${condition} ${attribute}_idx ON ${tablename} ( ${attribute} )`).then(() => {
            console.log(`CREATE INDEX ${attribute}_idx ON ${tablename} ( ${attribute} ) successfully.`);
        }).catch((err: { [key: string]: any }) => {
            console.log(err.info + " query " + err.query);
        })
        return this
    }
}
