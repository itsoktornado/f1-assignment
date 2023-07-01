import { raceService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class RaceController extends CrudController<typeof raceService> {
  constructor() {
    super(raceService)
  }
  
}