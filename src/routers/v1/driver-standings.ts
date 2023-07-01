import { driverStandingController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class DriverStandingRouter extends CrudRouter<typeof driverStandingController> {
  constructor() {
    super(driverStandingController)
  }
  customRouting(): void {
      
  }
  
}