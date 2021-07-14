import React from 'react'
import {FormOs} from '@pdb/presentation/pages'
import {RemoteCreateOs, RemoteGetProblemsAndVehicles} from '@pdb/data/usecases'
import {basUrl} from '@pdb/services'
import {AuthorizeHttpClientDecorator} from '../decorators'
import {AxiosHttpClient} from '@pdb/infra/http'
import {AsyncStorageAdapter} from '@pdb/infra/cache'
import {HttpClient} from '@pdb/domain/protocols/http'
import {NavigatorScreenParams} from '@react-navigation/native'

const makeAuthHttpClient: HttpClient = new AuthorizeHttpClientDecorator(
  new AsyncStorageAdapter(),
  new AxiosHttpClient(),
  'multipart/form-data',
)

const remoteCreateOs = (): RemoteCreateOs => {
  const authHttpClient = makeAuthHttpClient

  return new RemoteCreateOs(`${basUrl as string}/orders`, authHttpClient)
}

const remoteGetProblemsAndVehicles = (
  id: string,
): RemoteGetProblemsAndVehicles => {
  const authHttpClient = makeAuthHttpClient
  console.log(id)

  return new RemoteGetProblemsAndVehicles(
    `${basUrl as string}/categories/${id}/problems`,
    authHttpClient,
  )
}

type ParamsList = {
  categoryId: any
}

type Params = {
  route: NavigatorScreenParams<ParamsList>
}

export const CreateFormOsPage: React.FC<Params> = ({route}: Params) => {
  const {categoryId} = route.params

  return (
    <FormOs
      remoteCreateOs={remoteCreateOs()}
      remoteGetProblemsAndVehicles={remoteGetProblemsAndVehicles(categoryId)}
    />
  )
}
