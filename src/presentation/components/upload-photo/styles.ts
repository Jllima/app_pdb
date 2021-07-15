/* eslint-disable prettier/prettier */
import styled from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

const ImagePhoto = styled.Image`
  borderRadius: 25px;
  backgroundColor: ${Colors.primaryColor};
  marginHorizontal: 25px;
  marginTop: 10px;
  width: 340; 
  height: 300;
  borderWidth: 5;
  borderColor: ${Colors.ligthGrey};
`

export {ImagePhoto}