import { Inject, Controller, Get } from '@midwayjs/decorator';
import { Context, Response } from '@midwayjs/express';

@Controller('/')
export class HomeController {

  @Inject()
  ctx: Context;

  @Inject()
  req: Context;

  @Inject()
  res: Response;

  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
}
