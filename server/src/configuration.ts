import { Configuration, App } from '@midwayjs/decorator';
import * as express from '@midwayjs/express';
import * as orm from '@midwayjs/orm';
import { join } from 'path';
import * as crossDomain from '@midwayjs/cross-domain'; // 引入cors跨域组件
import * as bodyParser from 'body-parser';  // 使用body-parser组件

@Configuration({
  imports: [express, crossDomain, orm],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: express.Application;
  async onReady() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
export class AutoConfiguration { }