import { ICrudOption } from '@/interfaces'
import { CrudService } from '../crudService.pg'
import { Constructors, Qualifying, Races } from '@/models/tables'
import sequelize from 'sequelize';

export class ConstructorService extends CrudService<typeof Constructors> {
  constructor()  {
    super(Constructors)
  }
  
  async getListAllConstructor(params: any, option?: ICrudOption) {
    const { year } = params
    console.log(year)

    let result = await Qualifying.findAll({
      where: {
        "$QualifyingToRaces.year": year
      },
      include: [
        {
          association: "QualifyingToConstructors",
          attributes: []
        },
        {
          association: "QualifyingToRaces",
          attributes: []
        }
      ]
      
    })
    console.log(result)
    return result
  }
}