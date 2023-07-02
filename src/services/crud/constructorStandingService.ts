import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { ConstructorStandings } from '@/models/tables'
import sequelize from 'sequelize';

export class ConstructorStandingService extends CrudService<typeof ConstructorStandings> {
  constructor()  {
    super(ConstructorStandings)
  }
  
}