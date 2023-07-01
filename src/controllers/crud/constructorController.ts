import { constructorService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class ConstructorController extends CrudController<typeof constructorService> {
  constructor() {
    super(constructorService)
  }
  
}