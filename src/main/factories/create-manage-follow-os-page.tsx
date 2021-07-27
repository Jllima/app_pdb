import React from 'react'
import {RemoteListOrdersOpenedsAndCloseds} from '@pdb/data/usecases'
import {AxiosHttpClient} from '@pdb/infra/http'
import {basUrl} from '@pdb/services'
import {ManagerFollowOs} from '@pdb/presentation/pages'
import {AuthorizeHttpClientDecorator} from '@pdb/main/decorators'
import {AsyncStorageAdapter} from '@pdb/infra/cache'

const remoteListOrdersOpenedsAndCloseds =
  (): RemoteListOrdersOpenedsAndCloseds => {
    const authHttpClient = new AuthorizeHttpClientDecorator(
      new AsyncStorageAdapter(),
      new AxiosHttpClient(),
    )

    return new RemoteListOrdersOpenedsAndCloseds(
      `${basUrl as string}/manager/orders`,
      authHttpClient,
    )
  }

export const CreateManageFollowOsPage: React.FC = () => (
  <ManagerFollowOs
    listOrdersOpenedsAndCloseds={remoteListOrdersOpenedsAndCloseds()}
  />
)
