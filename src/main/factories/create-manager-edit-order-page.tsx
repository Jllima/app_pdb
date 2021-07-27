import React from 'react'
import {
  RemoteEditOrder,
  RemoteManageOs,
  RemoteGetOrder,
} from '@pdb/data/usecases'
import {AxiosHttpClient} from '@pdb/infra/http'
import {basUrl} from '@pdb/services'
import {ManagerManageOs} from '@pdb/presentation/pages'
import {NavigatorScreenParams} from '@react-navigation/native'
import {AuthorizeHttpClientDecorator} from '@pdb/main/decorators'
import {AsyncStorageAdapter} from '@pdb/infra/cache'

const remoteEditOrder = (id: string): RemoteEditOrder => {
  const authHttpClient = new AuthorizeHttpClientDecorator(
    new AsyncStorageAdapter(),
    new AxiosHttpClient(),
  )

  return new RemoteEditOrder(
    `${basUrl as string}/manager/orders/${id}/edit`,
    authHttpClient,
  )
}

const remoteManagerOrder = (id: string): RemoteManageOs => {
  const authHttpClient = new AuthorizeHttpClientDecorator(
    new AsyncStorageAdapter(),
    new AxiosHttpClient(),
  )

  return new RemoteManageOs(
    `${basUrl as string}/manager/orders/${id}`,
    authHttpClient,
  )
}

const remoteGetOrder = (id: string): RemoteGetOrder => {
  const authHttpClient = new AuthorizeHttpClientDecorator(
    new AsyncStorageAdapter(),
    new AxiosHttpClient(),
  )

  return new RemoteGetOrder(
    `${basUrl as string}/manager/orders/${id}`,
    authHttpClient,
  )
}

type Props = {
  orderIdParams: any
}

type Params = {
  route: NavigatorScreenParams<Props>
}

export const CreateManagerEditOrderPage: React.FC<Params> = ({
  route,
}: Params) => {
  const {orderIdParams} = route.params

  return (
    <ManagerManageOs
      editOrder={remoteEditOrder(orderIdParams)}
      managerOrder={remoteManagerOrder(orderIdParams)}
      getOrder={remoteGetOrder(orderIdParams)}
    />
  )
}
