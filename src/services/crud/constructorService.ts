import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Constructors, Qualifying, Races } from '@/models/tables'
import sequelize from 'sequelize';

export class ConstructorService extends CrudService<typeof Constructors> {
  constructor()  {
    super(Constructors)
  }
  
  async getListAllConstructor(params: any, option?: ICrudOption) {

    let result = await Constructors.findAll({
      include: [{
        model: Qualifying,
        include: [{
          model: Races,
          where: {
            "$races.year": params.year
          }
        }]
      }]
    })
    return result
  }
}