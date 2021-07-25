# cassanKub ORM
[![standard-readme compliant](https://img.shields.io/badge/cassanKub-blue)](https://github.com/ez-kraivit/cassanKub) 
[![standard-readme compliant](https://img.shields.io/badge/cassandra-1000-rad)](https://github.com/ez-kraivit/cassanKub)

## Manual

- [Install](#Install)
- [Setup Connect](#SetupConnect)


## Install
```sh
$ npm i cassankub or yarn add cassankub
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
    }, {
    tableName: "users",
    timestamps: true, // created_by created_at updated_by updated_at
    indexes: ["uid", "name"]
    })
    UsersModel.sync({force:true}) //This creates the table, dropping it first if it already existed
    UsersModel.sync() //This creates the table if it doesn't exist (and does nothing if it already exists)
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

## SetupConnect
```sh
    {
        "contactPoints":["127.1.1.23"],
        "localDataCenter":"center1",
        "keyspace":"",
        "credentials":{
            "username": "",
            "password": ""
    }
```
