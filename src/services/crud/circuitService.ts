import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Circuits } from '@/models/tables'

export class CircuitService extends CrudService<typeof Circuits> {
  constructor()  {
    super(Circuits)
  }
  
}