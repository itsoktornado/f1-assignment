import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { PitStops } from '@/models/tables'

export class PitStopService extends CrudService<typeof PitStops> {
  constructor()  {
    super(PitStops)
  }
  
}