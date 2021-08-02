import React from 'react'
import {RemoteGetOrder} from '@pdb/data/usecases'
import {AxiosHttpClient} from '@pdb/infra/http'
import {basUrl} from '@pdb/services'
import {ManagerShowOs} from '@pdb/presentation/pages'
import {NavigatorScreenParams} from '@react-navigation/native'
import {AuthorizeHttpClientDecorator} from '@pdb/main/decorators'
import {AsyncStorageAdapter} from '@pdb/infra/cache'

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

export const CreateManagerShowOSPage: React.FC<Params> = ({route}: Params) => {
  const {orderIdParams} = route.params

  return <ManagerShowOs getOrder={remoteGetOrder(orderIdParams)} />
}
