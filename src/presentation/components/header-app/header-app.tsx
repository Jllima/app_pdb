/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react'
import {Header, Body, Title} from 'native-base'
import {AuthContext} from '@pdb/presentation/contexts'

const HeaderApp: React.FC = () => {
  const {user} = useContext(AuthContext)

  return (
    <Header>
      <Body>
        <Title style={{alignSelf: 'center'}}>
          Seja Bem vindo (a): {user.name}
        </Title>
      </Body>
    </Header>
  )
}

export default HeaderApp
