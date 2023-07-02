import { constructorController } from '@/controllers'
import * as _ from 'lodash'
import { Request, Response } from '../base'
import { CrudRouter } from '../crud'

export default class ConstructorRouter extends CrudRouter<typeof constructorController> {
  constructor() {
    super(constructorController)
  }
  customRouting(): void {
      this.router.get('/get-result-by-year/:year', this.route(this.getListAllConstructor))
  }
  
  async getListAllConstructor(req: Request, res: Response) {
    const year: number = parseInt(req.params.year)
    const result = await this.controller.getListAllConstructor({ year })
    this.onSuccess(res, result)
  }
}