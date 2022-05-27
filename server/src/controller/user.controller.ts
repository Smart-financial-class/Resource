import { Inject, Controller, Get, Post } from '@midwayjs/decorator';
import { Context, Response } from '@midwayjs/express';
import { User } from '../entity/user'
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import console = require('console');

@Controller('/user')
export class HomeController {

  @InjectEntityModel(User)
  userModel: Repository<User>;

  @Inject()
  ctx: Context;

  @Inject()
  req: Context;

  @Inject()
  res: Response;

  @Get('/')
  async home(): Promise<string> {
    return 'Api User';
  }

  @Post('/register')
  async register(): Promise<string> {
    console.log(this.req.body)
    const status = await this.saveUser(this.req.body)
      .then(() => {
        return 'ok';
      })
      .catch(err => {
        console.log(err)
        return err.message;
      })
    return status;
  }

  async saveUser(user: User) {
    const userResult = await this.userModel.save(user);
    console.log('success', userResult.uid);
  }
}
