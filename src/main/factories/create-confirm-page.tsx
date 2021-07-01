import React from 'react'
import {Confirmation} from '@pdb/presentation/pages'
import {RemoteConfirmation} from '@pdb/data/usecases'
import {basUrl} from '@pdb/services'
import {AuthorizeHttpClientDecorator} from '../decorators'
import {AxiosHttpClient} from '@pdb/infra/http'
import {AsyncStorageAdapter} from '@pdb/infra/cache'

const remoteConfirmation = (id: string): RemoteConfirmation => {
  const authHttpClient = new AuthorizeHttpClientDecorator(
    new AsyncStorageAdapter(),
    new AxiosHttpClient(),
  )

  return new RemoteConfirmation(
    `${basUrl}/users/${id}/confirmation`,
    authHttpClient,
  )
}

type Props = {
  userIdParams: string
}

export const CreateConfirmPage: React.FC<Props> = ({userIdParams}: Props) => (
  <Confirmation remoteConfirm={remoteConfirmation(userIdParams)} />
)
