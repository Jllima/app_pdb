/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import FeatherIcon from 'react-native-vector-icons/Feather'

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${Colors.write};
`

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 25px;
  backgroundColor: ${Colors.ligthGrey};
  alignSelf: stretch;
  marginBottom: 25px;
  marginHorizontal: 20px;
  fontSize: 16px;
`

const Logo = styled.Image`
  height: 25%;
  marginBottom: 40px;
`

const Button = styled.TouchableOpacity`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 25px;
  backgroundColor: ${Colors.primaryColor};
  alignSelf: stretch;
  marginHorizontal: 20px;
  marginTop: 15px;
  flexDirection: row;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.Text`
  color: ${Colors.write};
  fontWeight: bold;
  fontSize: 18px;
  textAlign: center;
`

const Icon = styled(FeatherIcon)`
  margin-left: 5px;
`

export {Container, Input, Button, ButtonText, Icon, Logo}