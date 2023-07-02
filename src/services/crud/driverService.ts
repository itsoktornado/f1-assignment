import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Drivers } from '@/models/tables'
import sequelize from 'sequelize';

export class DriverService extends CrudService<typeof Drivers> {
  constructor()  {
    super(Drivers)
  }
  
}