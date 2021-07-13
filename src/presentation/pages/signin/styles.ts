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
  height: 25%;
  marginBottom: 40px;
`
const ContainerResetPwd = styled.View`
  marginTop: 50px;
`

export {Container, Logo, ContainerResetPwd}
