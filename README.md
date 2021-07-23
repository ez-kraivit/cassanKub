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
