import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { LapTimes } from '@/models/tables'
import sequelize from 'sequelize';

export class LapTimeService extends CrudService<typeof LapTimes> {
  constructor()  {
    super(LapTimes)
  }
  
}