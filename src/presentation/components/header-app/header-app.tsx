import React, {useContext} from 'react'
import {Header, Body, Title} from 'native-base'
import {AuthContext} from '@pdb/presentation/contexts'

const HeaderApp: React.FC = () => {
  const {user} = useContext(AuthContext)

  return (
    <Header>
      <Body>
        <Title>SEJA BEM VINDO (A): {user.name}</Title>
      </Body>
    </Header>
  )
}

export default HeaderApp
