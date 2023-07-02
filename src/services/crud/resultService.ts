import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Results } from '@/models/tables'
import sequelize from 'sequelize';

export class ResultService extends CrudService<typeof Results> {
  constructor()  {
    super(Results)
  }
  
}