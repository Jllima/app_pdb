import React, {useContext} from 'react'
import {AuthContext} from '@pdb/presentation/contexts'
import AuthRoutes from './auth.routes'
import {ConfirmOrMenu} from '@pdb/presentation/pages'

const Routes: React.FC = () => {
  const {user} = useContext(AuthContext)

  return user ? <ConfirmOrMenu /> : <AuthRoutes />
}

export default Routes
