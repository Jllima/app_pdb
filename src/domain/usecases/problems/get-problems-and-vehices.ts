import {ProblemsCategoriesAndVehiclesModel} from '@pdb/domain/models/list-problems-and-vehicles-model'

export interface GetProblemsAndVehicles {
  get: () => Promise<ProblemsCategoriesAndVehiclesModel>
}
