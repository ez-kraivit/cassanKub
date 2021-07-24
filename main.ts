import cassankub , {DataType , Model} from "./lib/cassankub";
import {LowQuery} from "./lib/LowQuery";
import * as ConfigJson from './config.json'
import UsersModel from './database/migration/UserModel'
import OrganizationModel from './database/migration/OrganizationModel'

const main = async () => { 
    const _Cassandra = await cassankub.init(ConfigJson.cassandra) 

    const Users2 = await UsersModel.find({where:{
        name:`'kraivit'`
    }})
    // console.log(UsersModel);
    // console.log(Organization);
    // console.log(Users1);
    // console.log(Users2);
    
}
main()


    // OrganizationModel.sync()
    // UsersModel.sync()

    // OrganizationModel.find({where:{
    //     id:["asdasd","Asdasd","asdsad"],
    //     name:"asdasd"
    // },select:['id']})

    // UsersModel.find({where:{
    //     id:{
    //         ["not"]:true,
    //         ["like"]:"42323%"
    //     }
    // }})

