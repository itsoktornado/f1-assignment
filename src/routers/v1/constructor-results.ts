import { constructorResultController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class ConstructorResultRouter extends CrudRouter<typeof constructorResultController> {
  constructor() {
    super(constructorResultController)
  }
  customRouting(): void {
      
  }
  
}