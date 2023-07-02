import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { ConstructorResults } from '@/models/tables'
import sequelize from 'sequelize';

export class ConstructorResultService extends CrudService<typeof ConstructorResults> {
  constructor()  {
    super(ConstructorResults)
  }
  
}