import { Configuration, App } from '@midwayjs/decorator';
import * as express from '@midwayjs/express';
import * as orm from '@midwayjs/orm';
import { join } from 'path';
import * as crossDomain from '@midwayjs/cross-domain'; // 引入cors跨域组件

@Configuration({
  imports: [express, crossDomain, orm],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: express.Application;
  async onReady() {
  }
}
export class AutoConfiguration { }