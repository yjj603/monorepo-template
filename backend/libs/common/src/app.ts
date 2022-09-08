import {CacheModule} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {DatabaseModule} from './common/database/database.module';
import {getConfig} from './utils';

export const AppCommonModule =(entities:any)=> [
  DatabaseModule.register(entities),
  CacheModule.register({
    isGlobal: true,
  }),
  ConfigModule.forRoot({
    ignoreEnvFile: true,
    isGlobal: true,
    load: [getConfig],
  }),
]