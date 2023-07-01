import { resultController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class ResultRouter extends CrudRouter<typeof resultController> {
  constructor() {
    super(resultController)
  }
  customRouting(): void {
      
  }
  
}