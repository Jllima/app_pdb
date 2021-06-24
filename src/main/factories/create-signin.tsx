import React from 'react'
import {SignIn} from '@pdb/presentation/pages'
import {RemoteAuth} from '@pdb/data/usecases'
import {AxiosHttpClient} from '@pdb/infra/http'
import {basUrl} from '@pdb/services'

const httpClient = new AxiosHttpClient()
const remoteAuth = new RemoteAuth(`${basUrl}/auth/login`, httpClient)

export const createSignIn: React.FC = () => (
  <SignIn authentication={remoteAuth} />
)
