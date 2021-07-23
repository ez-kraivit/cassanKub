import Cassandra , {DataType , Model} from "./lib/Cassandra";
import {LowQuery} from "./lib/LowQuery";
export default Cassandra
export { DataType,Model,LowQuery }

// import * as ConfigJson from './config.json'
// import Cassandra , {DataType} from "./lib/Cassandra";
// export default Cassandra
// export { DataType  }
// import UsersModel from './database/migration/UserModel'
// import OrganizationModel from './database/migration/OrganizationModel'

// const main = async () => { 
//    const _Cassandra = await Cassandra.init(ConfigJson.cassandra) 
   
//    OrganizationModel.sync()
//    UsersModel.sync()
   
   // UsersModel.sync()
   // OrganizationModel.sync({force:true})
   // await UsersModel.sync({ force: true })   
   // await OrganizationModel.sync({ force: true })
// }
// main()
