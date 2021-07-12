/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import {Icon} from 'native-base'

const Button = styled.TouchableOpacity`
  paddingHorizontal: 20px;
  paddingVertical: 20px;
  borderRadius: 5px;
  backgroundColor: ${Colors.primaryColor};
  alignSelf: stretch;
  marginHorizontal: 20px;
  marginTop: 50%;
`

const IconTab = styled(Icon)`
  margin-left: 5px;
  font-size: 85px;
  color: #FFFFFF
`

const Text = styled.Text`
  margin-top: 15px;
  font-size: 22px;
  font-weight: 600;
  color: ${Colors.grey}
`
const Container = styled.View`
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${Colors.write};
` 
const Image = styled.Image`
  width: 100px;
  height: 100px;
`

export {Button, IconTab, Text, Container, Image}
