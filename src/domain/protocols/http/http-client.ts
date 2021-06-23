export type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export enum StatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  notAcceptable = 406,
  notContent = 422,
  serverError = 500,
}

export type HttpRequest = {
  url: string
  method: HttpMethod
  params?: any
  body?: any
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: StatusCode
  body?: T
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}
