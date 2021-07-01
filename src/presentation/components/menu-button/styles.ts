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
  marginHorizontal: 125px;
  marginTop: 40px;
  flexDirection: row;
  justify-content: center;
  align-items: center;
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

export {Button, IconTab, Text}
