import React, {useContext} from 'react'
import {AuthContext} from '@pdb/presentation/contexts'
import {Confirmation, Menu} from '@pdb/presentation/pages'

const ConfirmOrMenu: React.FC = () => {
  const {confirmation} = useContext(AuthContext)

  return <>{confirmation ? <Menu /> : <Confirmation />}</>
}

export default ConfirmOrMenu
