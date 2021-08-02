export type OrderModel = {
  id: number
  created_at: string
  reference: string
  description: string
  owner: {
    id: number
    confirmation: true
    employee_name: string
    username: string
  }
  problem: {
    id: number
    description: string
    priority: string
    category: {
      id: number
      name: string
    }
  }
  solution?: {
    id: number
    description: string
  }
  manager?: {
    id: number
    name: string
  }
  car_mecanic?: {
    id: number
    name: string
  }
  status: {
    id: number
    color: string
    name: string
  }
  vehicle: {
    id: number
    car_number: string
  }
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
  status_id: number
  created_at: string
  reference: string
  status: string
}

export type ListOrdersOpenedsAndClosedsModel = {
  openeds: OrderListModel[]
  closeds: OrderListModel[]
}

export type OrdersModel = OrderListModel[]
