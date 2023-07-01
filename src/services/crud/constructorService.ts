import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Constructors } from '@/models/tables'

export class ConstructorService extends CrudService<typeof Constructors> {
  constructor()  {
    super(Constructors)
  }
  
}