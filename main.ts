import cassankub , {DataType , Model} from "./lib/cassankub";
import {LowQuery} from "./lib/LowQuery";
import * as ConfigJson from './config.json'
import UsersModel from './database/migration/UserModel'
import OrganizationModel from './database/migration/OrganizationModel'

const main = async () => { 
   const _Cassandra = await cassankub.init(ConfigJson.cassandra) 
   
   OrganizationModel.sync()
   UsersModel.sync()

}
main()
