import React from 'react'
import {RemoteGetOrder} from '@pdb/data/usecases'
import {AxiosHttpClient} from '@pdb/infra/http'
import {basUrl} from '@pdb/services'
import {ShowOs} from '@pdb/presentation/pages'

const httpClient = new AxiosHttpClient()
const remoteGetOrder = (id: string): RemoteGetOrder =>
  new RemoteGetOrder(`${basUrl as string}/orders/${id}`, httpClient)

type Props = {
  orderIdParams: string
}

export const CreateConfirmPage: React.FC<Props> = ({orderIdParams}: Props) => (
  <ShowOs getOrder={remoteGetOrder(orderIdParams)} />
)
