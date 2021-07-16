import React from 'react'
import {Container} from './styles'
import {FollowOsTabContent} from '@pdb/presentation/components'
import {Header, Body, Title, Tabs, Tab} from 'native-base'
import {imgCarroceria} from '@pdb/presentation/assets'
import {FlatList, StyleSheet} from 'react-native'
import Colors from '@pdb/presentation/styles/colors'

const colorStyle = StyleSheet.create({
  warning: {
    backgroundColor: Colors.lightOrange,
  },
  positive: {
    backgroundColor: Colors.primaryColor,
  },
  closed: {
    backgroundColor: Colors.red,
  },
})

const infosOpen = [
  {
    id: '304',
    imagem: {imgCarroceria},
    numOS: 'OS 304',
    description: 'Data: 14/07/2021 12h',
    status: 'ENTRADA',
    style: colorStyle.warning,
  },
  {
    id: '57',
    imagem: {imgCarroceria},
    numOS: 'OS 57',
    description: 'Data: 11/07/2021 14h',
    status: 'MANUTENÇÃO',
    style: colorStyle.positive,
  },
]

const infosCloseds = [
  {
    id: '32',
    imagem: {imgCarroceria},
    numOS: 'OS 32',
    description: 'Data: 05/07/2021 14h',
    status: 'FINALIZADA',
    style: colorStyle.closed,
  },
]

const FollowOs: React.FC = () => {
  return (
    <>
      <Header>
        <Body>
          <Title>ACOMPANHAR OS</Title>
        </Body>
      </Header>
      <Container>
        <Tabs>
          <Tab heading="Abertas">
            <FlatList
              keyExtractor={item => item.id}
              data={infosOpen}
              renderItem={obj => {
                return (
                  <FollowOsTabContent
                    path={obj.item.imagem.imgCarroceria}
                    osNumber={obj.item.numOS}
                    description={obj.item.description}
                    status={obj.item.status}
                    viewStyle={obj.item.style}
                  />
                )
              }}
            />
          </Tab>
          <Tab heading="Fechadas">
            <FlatList
              data={infosCloseds}
              renderItem={obj => {
                return (
                  <FollowOsTabContent
                    path={obj.item.imagem.imgCarroceria}
                    osNumber={obj.item.numOS}
                    description={obj.item.description}
                    status={obj.item.status}
                    viewStyle={obj.item.style}
                  />
                )
              }}
            />
          </Tab>
        </Tabs>
      </Container>
    </>
  )
}

export default FollowOs
