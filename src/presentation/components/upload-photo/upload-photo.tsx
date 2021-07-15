import React, {useContext} from 'react'
import {UploadContext} from '@pdb/presentation/contexts'
import {PhotoButton} from '@pdb/presentation/components'
import {ImagePhoto} from './styles'

const UploadPhoto: React.FC = () => {
  const {photoImage, chooseUpload} = useContext(UploadContext)

  return (
    <>
      {photoImage && <ImagePhoto source={{uri: photoImage.uri}} />}
      <PhotoButton iconName="camera-outline" onPress={chooseUpload}>
        Foto
      </PhotoButton>
    </>
  )
}

export default UploadPhoto
