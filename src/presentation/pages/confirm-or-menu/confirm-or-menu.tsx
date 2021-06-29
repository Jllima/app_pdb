import React, {useContext} from 'react'
import {AuthContext} from '@pdb/presentation/contexts'
import {Menu} from '@pdb/presentation/pages'
import {CreateConfirmPage} from '@pdb/main/factories'

const ConfirmOrMenu: React.FC = () => {
  const {user} = useContext(AuthContext)
  return user.confirmation ? (
    <Menu />
  ) : (
    <CreateConfirmPage userIdParams={user.id} />
  )
}

export default ConfirmOrMenu
