import { raceController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class RaceRouter extends CrudRouter<typeof raceController> {
  constructor() {
    super(raceController)
  }
  customRouting(): void {
      
  }
  
}