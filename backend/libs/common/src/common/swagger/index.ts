import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { getBasic } from '@malaka/common/utils';

export const generateDocument = (app: NestFastifyApplication) => {
  const options = new DocumentBuilder()
    .setTitle(getBasic('name'))
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api', app, document);
};
