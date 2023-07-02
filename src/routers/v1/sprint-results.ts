import { sprintResultController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class SprintResultRouter extends CrudRouter<typeof sprintResultController> {
  constructor() {
    super(sprintResultController)
  }
  customRouting(): void {
      
  }
  
}