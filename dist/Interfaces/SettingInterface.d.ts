import { auth } from 'cassandra-driver/lib/auth';
export interface ClientOptions {
    contactPoints?: string[];
    localDataCenter?: string;
    keyspace?: string;
    protocolOptions?: ClientProtocol;
    authProvider?: auth.AuthProvider;
    credentials?: ClientCredentials;
    pooling?: ClientPooling;
}
export interface ClientProtocol {
    port: number;
}
export interface ClientPooling {
    coreConnectionsPerHost?: {
        [key: number]: number;
    };
    heartBeatInterval?: number;
    maxRequestsPerConnection?: number;
    warmup?: boolean;
}
export interface ClientCredentials {
    username: string;
    password: string;
}
