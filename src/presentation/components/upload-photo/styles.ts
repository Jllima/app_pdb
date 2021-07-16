/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

const ImagePhoto = styled.Image`
  borderRadius: 25px;
  backgroundColor: ${Colors.primaryColor};
  marginHorizontal: 25px;
  marginTop: 10px;
  width: 340px; 
  height: 300px;
  borderWidth: 5px;
  borderColor: ${Colors.ligthGrey};
`

export {ImagePhoto}