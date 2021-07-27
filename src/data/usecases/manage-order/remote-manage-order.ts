import {ErrorsDetailsModel} from '@pdb/data/models'
import {DetailError} from '@pdb/domain/errors'
import {OrderDataModel} from '@pdb/domain/models/order-model'
import {HttpClient, StatusCode} from '@pdb/domain/protocols/http'
import {
  ManageOrder,
  ManageOrderParams,
} from '@pdb/domain/usecases/orders/manage-order'

export class RemoteManageOs implements ManageOrder {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<
      OrderDataModel | ErrorsDetailsModel
    >,
  ) {}

  async manage(params: ManageOrderParams): Promise<StatusCode> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: params,
    })

    if (httpResponse.statusCode === StatusCode.noContent)
      return StatusCode.noContent

    throw new DetailError(httpResponse.body as ErrorsDetailsModel)
  }
}
