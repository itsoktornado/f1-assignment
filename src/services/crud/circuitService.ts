import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Circuits } from '@/models/tables'
import sequelize from 'sequelize';

export class CircuitService extends CrudService<typeof Circuits> {
  constructor()  {
    super(Circuits)
  }
  
}