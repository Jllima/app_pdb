import React, {useContext} from 'react'
import {UploadContext} from '@pdb/presentation/contexts'
import {PhotoButton, Spinner} from '@pdb/presentation/components'
import {ImagePhoto} from './styles'

const UploadPhoto: React.FC = () => {
  const {photoImage, chooseUpload, isLoading} = useContext(UploadContext)

  return (
    <>
      {isLoading && <Spinner />}
      {photoImage && !isLoading && (
        <ImagePhoto source={{uri: photoImage.uri}} />
      )}
      <PhotoButton iconName="camera-outline" onPress={chooseUpload}>
        Foto
      </PhotoButton>
    </>
  )
}

export default UploadPhoto
