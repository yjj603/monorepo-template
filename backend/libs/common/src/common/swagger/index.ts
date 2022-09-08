import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as packageConfig from '';
export const generateDocument = (app:any) => {
  const options = new DocumentBuilder()
 /*   .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)*/
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api', app, document);
};
