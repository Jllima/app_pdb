import styled, {css} from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

type StatusProps = {
  statusId: number
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.write};
  height: 65px;
  border-bottom-color: ${Colors.ligthGrey};
  border-bottom-width: 1px;
`

const InfoArea = styled.View`
  flex: 2;
  flex-direction: column;
  align-items: flex-start;
`
const OsNumber = styled.Text`
  font-size: 19px;
  font-weight: 400;
  color: ${Colors.darkGrey}
  margin-left: -20px;
  margin-top: 5px;
`
const Description = styled.Text`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 300;
  color: ${Colors.grey}
  margin-left: -20px;
  margin-bottom: 10px;
`
const ImageContent = styled.View`
  flex: 1;
`
const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`
const StatusArea = styled.View<StatusProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 30px;
  border-radius: 25px;
  ${props => {
    switch (props.statusId) {
      case 1:
        return css`
          background-color: ${Colors.lightOrange};
        `
      case 2:
        return css`
          background-color: ${Colors.primaryColor};
        `
      case 3:
        return css`
          background-color: ${Colors.red};
        `
      default:
        return css`
          background-color: ${Colors.green};
        `
    }
  }}
`

const Status = styled.Text`
  font-size: 13px;
  font-weight: 900;
  color: ${Colors.write};
  text-align: center;
`

export {
  StatusArea,
  Description,
  Container,
  Image,
  Status,
  InfoArea,
  OsNumber,
  ImageContent,
}
