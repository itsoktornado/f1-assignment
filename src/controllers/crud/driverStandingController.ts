import { driverStandingService } from '@/services'
import { CrudController } from '@/controllers'
import { ICrudOption } from '@/interfaces'

export class DriverStandingController extends CrudController<typeof driverStandingService> {
  constructor() {
    super(driverStandingService)
  }
  
}