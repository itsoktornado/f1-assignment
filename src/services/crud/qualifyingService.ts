import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Qualifying } from '@/models/tables'

export class QualifyingService extends CrudService<typeof Qualifying> {
  constructor()  {
    super(Qualifying)
  }
  
}