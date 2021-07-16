/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'
import {Icon, Text} from 'native-base'

const StatusArea = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  borderRadius: 25px;
  height: 25px;
  width: 132px;
  margin-right: 50px;
`
const InfoArea = styled.View`
  flexDirection: column;
  alignItems: center;
  justifyContent: space-between;
  margin-left: 10px;
  margin-right: 10px;
  
`
const IconTab = styled(Icon)`
  margin-left: 5px;
  font-size: 85px;
  color: #FFFFFF
`

const OsNumber = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  font-weight: bold;
  color: ${Colors.grey}
  margin-left: -60px;
  margin-top: 5px;
`
const Description = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 300;
  color: ${Colors.grey}
  margin-left: -10px;
  margin-bottom: 10px;
`
const Container = styled.TouchableOpacity`
  alignItems: center;
  justifyContent: space-between;
  backgroundColor: ${Colors.write};
  height: 57px;
  flexDirection: row;
` 
const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin-left:10px;
`
const Status = styled(Text)`
  font-size: 13px;
  font-weight: 900;
  color: ${Colors.write}
`

export {StatusArea, IconTab, Description, Container, Image, Status, InfoArea, OsNumber}
