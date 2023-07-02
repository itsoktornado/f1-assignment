import { qualifyingService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class QualifyingController extends CrudController<typeof qualifyingService> {
  constructor() {
    super(qualifyingService)
  }
  
}