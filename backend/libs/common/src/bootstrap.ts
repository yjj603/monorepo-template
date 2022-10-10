import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './common/swagger';
/*import { fastify } from 'fastify';
import { FastifyLogger } from './logger';*/
import { getAddress, getBasic } from '@malaka/common/utils';
export async function bootstrap(module: any) {
  /*  const fastifyInstance = fastify({
    logger: FastifyLogger,
  })
  console.log(fastifyInstance);*/
  const app = await NestFactory.create<NestFastifyApplication>(
    module,
    new FastifyAdapter({
      logger: true,
    }),
    {
      // logger:isDev()?['warn','error']:['error']
    },
  );

  // 全局字段校验开始 启动全局字段校验，保证请求接口字段校验正确。
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
    }),
  );
  // 全局字段校验结束

  //全局异常拦截开始
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  //全局异常拦截结束

  //全局接口返回值拦截器开始
  app.useGlobalInterceptors(new TransformInterceptor());
  //全局拦截器结束

  //swagger开始
  generateDocument(app);
  //swagger结束
  // cors
  app.enableCors();
  await app.listen(getBasic('port'), getAddress());

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
