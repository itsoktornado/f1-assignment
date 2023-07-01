import { circuitController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class CircuitRouter extends CrudRouter<typeof circuitController> {
  constructor() {
    super(circuitController)
  }
  customRouting(): void {
      
  }
  
}