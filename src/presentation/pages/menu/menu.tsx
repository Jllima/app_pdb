import React from 'react'
import HeaderApp from '@pdb/presentation/components/header-app/header-app'
import {Container} from './styles'
import {MenuButton} from '@pdb/presentation/components'

const Menu: React.FC = () => {
  return (
    <>
      <HeaderApp />
      <Container>
        <MenuButton iconName="file-text" iconText="Fazer OS" />
        <MenuButton iconName="search" iconText="Acompanhar OS" />
      </Container>
    </>
  )
}

export default Menu
