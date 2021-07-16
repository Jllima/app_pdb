import {OrderDataModel} from '@pdb/domain/models/order-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export type CreateOrderParams = FormData

export interface CreateOrder {
  create: (
    params: CreateOrderParams,
  ) => Promise<OrderDataModel | ErrorsDetailsModel>
}
