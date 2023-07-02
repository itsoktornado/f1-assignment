import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { DriverStandings } from '@/models/tables'
import sequelize from 'sequelize';

export class DriverStandingService extends CrudService<typeof DriverStandings> {
  constructor()  {
    super(DriverStandings)
  }
  
}