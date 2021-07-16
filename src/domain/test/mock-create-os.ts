import {OrderDataModel} from '@pdb/domain/models/order-model'
import {CreateOrderParams} from '@pdb/domain/usecases/orders/create-order'

export const mockOrderDataModel = (): OrderDataModel => ({
  data: {
    id: 1,
    km: 1223,
    car_number: 123,
    problem: 'Problem',
    state: 'State',
    status: 'Status',
    description: 'Description',
  },
  meta: {
    links: {
      self: 'url',
      image_url: 'url',
    },
  },
})

export const mockCreateOrderParams = (): CreateOrderParams => {
  return {
    'data[km]': 123,
    'data[problem_id]': 1,
    'data[status_id]': 1,
    'data[vehicle_id]': 1,
  }
}

export const mockOrderModel = (): OrderDataModel => mockOrderDataModel()
