import { DynamicModule, Module,Global } from '@nestjs/common';
import { DatabaseService } from './database.service';
import {constants} from '../../const';

@Global()
@Module({})
export class DatabaseModule {
  static register(entities:any):DynamicModule{
    return {
      module:DatabaseModule,
      providers:[
        DatabaseService,
        {
          provide: constants.ENTITIES,
          useValue: entities
        }
      ],
      exports: [ DatabaseService ],
    }
  }
}
