import React from 'react'
import {HeaderApp, MenuButton} from '@pdb/presentation/components'
import {Container} from './styles'

const Menu: React.FC = () => {
  return (
    <>
      <HeaderApp />
      <Container>
        <MenuButton iconName="document-text-outline" iconText="Fazer OS" />
        <MenuButton iconName="search-outline" iconText="Acompanhar OS" />
      </Container>
    </>
  )
}

export default Menu
