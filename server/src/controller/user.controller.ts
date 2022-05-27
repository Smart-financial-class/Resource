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

  // 进行后端校验
  @Post('/check')
  async check(): Promise<string> {
    const checkData = this.ctx.body;
    if (checkData.username === "") {
      return '用户名为空';
    }
    if (checkData.password === "") {
      return '密码为空';
    }
    if (checkData.email === "") {
      return '邮箱为空';
    }
    if (checkData.phone === "") {
      return '手机号为空';
    }
    // 判断邮箱格式
    if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(checkData.email)) {
      return '邮箱格式不正确';
    }
    // 判断手机号格式
    if (!/^1[3456789]\d{9}$/.test(checkData.phone)) {
      return '手机号格式不正确';
    }
    console.log("success")
    return 'ok';
  }

  async saveUser(user: User) {
    const userResult = await this.userModel.save(user);
    console.log('success', userResult.uid);
  }
}
