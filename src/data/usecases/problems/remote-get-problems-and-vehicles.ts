import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {GetProblemsAndVehicles} from '@pdb/domain/usecases/problems/get-problems-and-vehices'
import {ProblemsCategoriesAndVehiclesModel} from '@pdb/domain/models/list-problems-and-vehicles-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'

export class RemoteGetProblemsAndVehicles implements GetProblemsAndVehicles {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async get(): Promise<ProblemsCategoriesAndVehiclesModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode === StatusCode.ok)
      return httpResponse.body as ProblemsCategoriesAndVehiclesModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
