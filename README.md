# cassanKub ORM
[![standard-readme compliant](https://img.shields.io/badge/cassanKub-blue)](https://github.com/ez-kraivit/cassanKub) 
[![standard-readme compliant](https://img.shields.io/badge/cassandra-1000-rad)](https://github.com/ez-kraivit/cassanKub)

## คู่มือการใช้งาน

- [ติดตั้ง](#ติดตั้ง)
- [การใข้งาน](#การใข้งาน)
	- [เพิ่มข้อมูล](#เพิ่มข้อมูล)
	- [ดูข้อมูล](#ดูข้อมูล)
	- [แก้ไขข้อมูล](#แก้ไขข้อมูล)
	- [ลบข้อมูล](#ลบข้อมูล)


## ติดตั้ง
```sh
$ npm i cassankub or yarn add cassankub
```

## การใช้งาน
```sh
    "cassandra":{
        "contactPoints":["127.1.1.23"],
        "localDataCenter":"center1",
        "keyspace":"",
        "credentials":{
            "username": "",
            "password": ""
        }
    }
```
