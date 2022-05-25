import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1653328028246_8351',
  express: {
    port: 7001,
  },
  cors: {
    credentials: true,
    origin: '*',
    allowHeaders: '*',
    allowMethods: '*'
  },
  orm: {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: 'iFinancial'
  }
} as MidwayConfig;

