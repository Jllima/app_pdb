/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${Colors.write};
`

const Logo = styled.Image`
  height: 20%;
  marginBottom: 40px;
`

const Title = styled.Text`
  font-size: 25px;
  color: ${Colors.primaryColor};
  margin-bottom: 40px;
`

export {Container, Logo, Title}