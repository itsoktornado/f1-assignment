import { constructorResultService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class ConstructorResultController extends CrudController<typeof constructorResultService> {
  constructor() {
    super(constructorResultService)
  }
  
}