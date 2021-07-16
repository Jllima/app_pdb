export type OrderModel = {
  id: number
  car_number: string
  category_id: number
  category_name: string
  created_at: string
  problem: string
  reference: string
  status: string
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

export type OrderListModel = {
  id: number
  category_id: number
  created_at: string
  reference: string
  status: string
}

export type OrdersModel = OrderListModel[]
