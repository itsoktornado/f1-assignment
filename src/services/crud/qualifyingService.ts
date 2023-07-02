import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Qualifying } from '@/models/tables'
import sequelize from 'sequelize';

export class QualifyingService extends CrudService<typeof Qualifying> {
  constructor()  {
    super(Qualifying)
  }
  
}