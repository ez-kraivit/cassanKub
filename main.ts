import * as ConfigJson from './config.json'
import Cassandra , { Model } from './lib/Cassandra'
import './database/migration/index'

const main = async () => {
   // const _Cassandra = await Cassandra.init(ConfigJson.cassandra) 
}
main()