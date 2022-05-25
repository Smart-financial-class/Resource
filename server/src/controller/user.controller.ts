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

  async saveUser() {
    // 保存用户信息
    let user = new User();
    user.username = 'demo';
    user.password = 'pwd';
    user.email = 'demo@example.com';
    user.phone = '12345';
    const userResult = await this.userModel.save(user);
    console.log('success', userResult.uid);
  }

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
    return 'Successfully register!';
  }
}
