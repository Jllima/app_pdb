import styled, {css} from 'styled-components/native'
import Colors from '@pdb/presentation/styles/colors'

type StatusProps = {
  statusId: number
}

const StatusArea = styled.View<StatusProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 200px;
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
      default:
        return css`
          background-color: ${Colors.red};
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
export {StatusArea, Status}
