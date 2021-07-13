import {ProblemsCategoriesAndVehiclesModel} from '@pdb/domain/models/list-problems-and-vehicles-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export interface GetProblemsAndVehicles {
  get: () => Promise<ProblemsCategoriesAndVehiclesModel | ErrorsDetailsModel>
}
