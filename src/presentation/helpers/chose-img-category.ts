import {ImageURISource} from 'react-native'
import {
  imgCarroceria,
  imgEletrica,
  imgMotor,
  imgSuspensao,
} from '@pdb/presentation/assets'

export const choseImgCategory = (id: number): ImageURISource => {
  switch (id) {
    case 1:
      return imgMotor
    case 2:
      return imgEletrica
    case 3:
      return imgCarroceria
    default:
      return imgSuspensao
  }
}
