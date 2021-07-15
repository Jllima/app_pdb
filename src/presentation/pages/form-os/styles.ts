/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

const Container = styled.View`
  flex: 1;
  padding-top: 30px
  backgroundColor: ${Colors.write};
` 

const TextName = styled.Text`
  color: ${Colors.primaryColor};
  marginHorizontal: 25px;
  marginBottom: 10px;
  fontSize: 20px;
` 
const TextTime = styled.Text`
  color: ${Colors.primaryColor};
  marginHorizontal: 25px;
  marginBottom: 25px;
  fontSize: 18px;
` 


export {Container, TextName, TextTime}