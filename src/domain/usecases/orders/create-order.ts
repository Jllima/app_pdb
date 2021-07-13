import {OrderDataModel} from '@pdb/domain/models/order-model'
import {ErrorsDetailsModel} from '@pdb/data/models'

export type CreateOrderParams = {
  'data[km]': number
  'data[problem_id]': number
  'data[status_id]': number
  'data[vehicle_id]': number
}

export interface CreateOrder {
  create: (
    params: CreateOrderParams,
  ) => Promise<OrderDataModel | ErrorsDetailsModel>
}
