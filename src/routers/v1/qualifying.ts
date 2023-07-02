import { qualifyingController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class QualifyingRouter extends CrudRouter<typeof qualifyingController> {
  constructor() {
    super(qualifyingController)
  }
  customRouting(): void {
      
  }
  
}