import {ProblemsCategoriesAndVehiclesModel} from '@pdb/domain/models/list-problems-and-vehicles-model'

export interface GetCategoriesAndVehicles {
  get: () => Promise<ProblemsCategoriesAndVehiclesModel>
}
