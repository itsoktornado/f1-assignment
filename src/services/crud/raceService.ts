import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Races } from '@/models/tables'

export class RaceService extends CrudService<typeof Races> {
  constructor()  {
    super(Races)
  }
  
}