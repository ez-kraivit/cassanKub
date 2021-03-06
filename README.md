# cassanKub ORM
[![standard-readme compliant](https://img.shields.io/badge/cassanKub-blue)](https://github.com/ez-kraivit/cassanKub) 
[![standard-readme compliant](https://img.shields.io/badge/cassandra-1000-rad)](https://github.com/ez-kraivit/cassanKub)

## Overview
cassankub is a Cassandra ORM for TypeScript.

## Manual

- [Install](#Install)
- [Setup Connect](#SetupConnect)
- [Operators](#Operators)
- [List Data](#ListData)
- [DataType](#DataType)
- [Model](#Model)
- [find](#find)


## Install
```sh
$ npm i cassankub or yarn add cassankub
```

## SetupConnect
```sh
    const config = {
        "contactPoints":["127.1.1.23"],
        "localDataCenter":"center1",
        "keyspace":"",
        "credentials":{
            "username": "",
            "password": ""
        }
    }
    await cassankub.init(config) 
```

## Operators
|name | Support |
|------------ | ------------ |
|and   |  =  |
|gt    |  >  |
|gte   |  >= |
|lt    |  <  |
|lte   |  <= |


## List Data
| Type
|------------- |
| STRING |
| UUID |
| INT |
| TEXT |
| FLOAT |
| BOOLEAN |
| BIGINT |
| BLOB |
| ASCII |
| DECIMAL |
| DOUBLE |
| TIMESTAMP |
 
## DataType
```sh
    import cassankub,{DataType} from 'cassankub'
    Cassandra.STRING or DataType.STRING
```

## Model
```sh
    class UsersModel extends Model { 
    }

    UsersModel.init({
    id: {
        type: DataType.UUID,
        primaryKey: true
    },
    uid: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    }
    },{
    tableName: "users",
    timestamps: true, // created_by created_at updated_by updated_at
    indexes: ["uid", "name"]
    })
    
    UsersModel.sync({force:true}) //This creates the table, dropping it first if it already existed
    UsersModel.sync() //This creates the table if it doesn't exist (and does nothing if it already exists)
```

## Find 
### UUIDversion4 The system will hide id and password.
```sh
    const Users = await UsersModel.find({
        where:{
            id:'0f4ab2f0-d8a5-4749-826b-f364f72f132a', 
            name:'boy',
            nickname:['boy'],
            money:{
                ['gte']:40
            }
        },
        select:['name'],
        limit:1
    })
    console.log(Users);
```

## Creating 
```sh
    const currentData = {   
        id:cassankub.uuid,
        uid:"ww",
        name:"test"
    } // or
    const currentData = [{   
        id:cassankub.uuid,
        uid:"ww",
        name:"test"
    }]
    const User = await UsersModel.create(currentData)  
    console.log(User.id);
      
```

## Updateing
```sh
    const currentData = {   
        set:{
            name:"hello"
        },
        where:{
            id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
        }
    }
    await UsersModel.update(currentData)
```

## Delete
```sh
    const currentData = [
        {
             id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
        }
    ] //or
        const currentData = {
             id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
        }
    await UsersModel.delete(currentData)  

```

## BatchData 
### Suppoer Array & Object
```sh
    const currentData = {   
        update:[
            {
                set:{
                    name:"hello"
                },
                where:{
                    id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
                }
            }
        ],
        create:[{   
            id:cassankub.uuid,
            uid:"ww",
            name:"test"
        }],
        delete:[
            {
                id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
            }
        ]
    }
    or
    const currentData = {   
        update:
            {
                set:{
                    name:"hello"
                },
                where:{
                    id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
                }
            }
        create:{   
            id:cassankub.uuid,
            uid:"ww",
            name:"test"
        },
        delete:{
            {
                id:`db11a204-9d7d-4ad5-bcdb-f7cb3a9272d9`
            }
        }
    }
    await UsersModel.batch(currentData)
```


## Injection