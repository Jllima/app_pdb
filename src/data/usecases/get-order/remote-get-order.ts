import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {GetOrder} from '@pdb/domain/usecases/orders/get-order'
import {OrderDataModel} from '@pdb/domain/models/order-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'

export class RemoteGetOrder implements GetOrder {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async get(): Promise<OrderDataModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode === StatusCode.ok)
      return httpResponse.body as OrderDataModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
