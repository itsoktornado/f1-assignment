import { lapTimeService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class LapTimeController extends CrudController<typeof lapTimeService> {
  constructor() {
    super(lapTimeService)
  }
  
}