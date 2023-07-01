import { sprintResultService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class SprintResultController extends CrudController<typeof sprintResultService> {
  constructor() {
    super(sprintResultService)
  }
  
}