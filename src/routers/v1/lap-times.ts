import { lapTimeController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class LapTimeRouter extends CrudRouter<typeof lapTimeController> {
  constructor() {
    super(lapTimeController)
  }
  customRouting(): void {
      
  }
  
}