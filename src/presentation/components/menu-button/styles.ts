/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import FeatherIcon from 'react-native-vector-icons/Feather'

const Button = styled.TouchableOpacity`
  paddingHorizontal: 10px;
  paddingVertical: 27px;
  borderRadius: 5px;
  backgroundColor: ${Colors.primaryColor};
  alignSelf: stretch;
  marginHorizontal: 125px;
  marginTop: 40px;
  flexDirection: row;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FeatherIcon)`
  margin-left: 5px;
`

const Text = styled.Text`
  margin-top: 15px;
  font-size: 22px;
  font-weight: 600;
  color: ${Colors.grey}
`

export {Button, Icon, Text}
