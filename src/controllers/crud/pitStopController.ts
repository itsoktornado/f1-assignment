import { pitStopService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class PitStopController extends CrudController<typeof pitStopService> {
  constructor() {
    super(pitStopService)
  }
  
}