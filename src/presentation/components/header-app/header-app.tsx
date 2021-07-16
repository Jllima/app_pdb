/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {Header, Body, Title} from 'native-base'

type HeaderProps = {
  title: string
}

const HeaderApp: React.FC<HeaderProps> = ({title}: HeaderProps) => {
  return (
    <Header>
      <Body>
        <Title style={{alignSelf: 'center'}}>{title}</Title>
      </Body>
    </Header>
  )
}

export default HeaderApp
