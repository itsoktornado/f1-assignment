import { constructorStandingService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class ConstructorStandingController extends CrudController<typeof constructorStandingService> {
  constructor() {
    super(constructorStandingService)
  }
  
}