import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {GetOrders} from '@pdb/domain/usecases/orders/get-orders'
import {OrdersModel} from '@pdb/domain/models/order-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'

export class RemoteGetOrders implements GetOrders {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async get(): Promise<OrdersModel | ErrorsDetailsModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    if (httpResponse.statusCode === StatusCode.ok)
      return httpResponse.body as OrdersModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
