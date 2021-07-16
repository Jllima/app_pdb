export type OrderModel = {
  id: number
  km: number
  car_number: number
  problem: string
  state: string
  status: string
  description: string
}

export type OrderDataModel = {
  data: OrderModel
  meta: {
    links: {
      self: string
      image_url: string
    }
  }
}

export type OrdersModel = OrderModel[]
