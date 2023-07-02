import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { SprintResults } from '@/models/tables'
import sequelize from 'sequelize';

export class SprintResultService extends CrudService<typeof SprintResults> {
  constructor()  {
    super(SprintResults)
  }
  
}