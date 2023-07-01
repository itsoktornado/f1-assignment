import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { DriverStandings } from '@/models/tables'

export class DriverStandingService extends CrudService<typeof DriverStandings> {
  constructor()  {
    super(DriverStandings)
  }
  
}