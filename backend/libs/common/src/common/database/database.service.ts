import { Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { getConfig } from '../../utils';
import { constants } from '../../const';
@Injectable()
export class DatabaseService {
  constructor(@Inject(constants.ENTITIES) private readonly entities: any) {
    this.createConnection();
  }
  createConnection() {
    const { DATA_BASE } = getConfig();
    const sequelize = new Sequelize(DATA_BASE);
    const entities: any = Object.values(this.entities);
    sequelize.addModels(entities);
    return sequelize;
  }
}
