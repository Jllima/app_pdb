import React, {useContext} from 'react'
import {HeaderApp, MenuButton} from '@pdb/presentation/components'
import {Container} from './styles'
import {AuthContext} from '@pdb/presentation/contexts'

const Menu: React.FC = () => {
  const {user} = useContext(AuthContext)

  return (
    <>
      <HeaderApp title={`Seja bem vindo(a): ${user.name}`} />
      <Container>
        <MenuButton iconName="document-text-outline" iconText="Fazer OS" />
        <MenuButton iconName="search-outline" iconText="Acompanhar OS" />
      </Container>
    </>
  )
}

export default Menu
