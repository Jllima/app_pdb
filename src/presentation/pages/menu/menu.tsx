import React, {useContext} from 'react'
import {HeaderApp, MenuButton} from '@pdb/presentation/components'
import {Container} from './styles'
import {AuthContext} from '@pdb/presentation/contexts'
import {useNavigation} from '@react-navigation/native'

const Menu: React.FC = () => {
  const {user} = useContext(AuthContext)
  const navigation = useNavigation()

  return (
    <>
      <HeaderApp title={`Seja bem vindo(a): ${user.employee_name}`} />
      <Container>
        <MenuButton
          iconName="document-text-outline"
          iconText="Fazer OS"
          onPress={() => navigation.navigate('MakeOsRoutes')}
        />
        <MenuButton
          iconName="search-outline"
          iconText="Acompanhar OS"
          onPress={() => navigation.navigate('SearchOs')}
        />
      </Container>
    </>
  )
}

export default Menu
