export type ListToEditOrderModel = {
  solutions: [
    {
      id: number
      description: string
    },
  ]
  statuses: [
    {
      id: number
      name: string
      color: string
    },
  ]
  mecanics: [
    {
      id: number
      name: string
    },
  ]
}
