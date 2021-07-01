export type ErrorsDetailsModel = {
  title?: string
  status?: string
  errors: ErrorsModel[]
}

export type ErrorsModel = {
  resource: string
  field: string
  detail: string
}
