import { constructorController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class ConstructorRouter extends CrudRouter<typeof constructorController> {
  constructor() {
    super(constructorController)
  }
  customRouting(): void {
      
  }
  
}