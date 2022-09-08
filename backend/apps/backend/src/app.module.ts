import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppCommonModule } from '@malaka/common';
import * as Entities from './entities';
@Module({
  imports: [...AppCommonModule(Entities)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
