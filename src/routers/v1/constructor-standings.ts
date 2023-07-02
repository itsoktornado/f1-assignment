import { constructorStandingController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class ConstructorStandingRouter extends CrudRouter<typeof constructorStandingController> {
  constructor() {
    super(constructorStandingController)
  }
  customRouting(): void {
      
  }
  
}