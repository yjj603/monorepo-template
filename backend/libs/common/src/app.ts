import { CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfig } from './utils';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

export const AppCommonModule = () => [
  ConfigModule.forRoot({
    ignoreEnvFile: true,
    isGlobal: true,
    load: [getConfig],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      ...configService.get('DATA_BASE'),
      timezone: '+08:00',
      synchronize: true,
      autoLoadEntities: true,
      logging: ['error'],
      maxQueryExecutionTime: 1000,
    }),
  }),
  CacheModule.register({
    isGlobal: true,
  }),
  ScheduleModule.forRoot(),
];
