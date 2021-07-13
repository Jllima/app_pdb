import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {OrderDataModel} from '@pdb/domain/models/order-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'
import {
  CreateOrder,
  CreateOrderParams,
} from '@pdb/domain/usecases/orders/create-order'

export class RemoteCreateOs implements CreateOrder {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<
      OrderDataModel | ErrorsDetailsModel
    >,
  ) {}

  async create(params: CreateOrderParams): Promise<OrderDataModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })

    if (httpResponse.statusCode === StatusCode.created)
      return httpResponse.body as OrderDataModel

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
