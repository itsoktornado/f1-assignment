import { circuitService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class CircuitController extends CrudController<typeof circuitService> {
  constructor() {
    super(circuitService)
  }
  
}