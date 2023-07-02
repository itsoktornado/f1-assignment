import { resultService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class ResultController extends CrudController<typeof resultService> {
  constructor() {
    super(resultService)
  }
  
}