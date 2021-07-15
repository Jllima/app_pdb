import React, {createContext, useState} from 'react'
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker'

interface UploadContextData {
  chooseUpload: () => void
  photoImage: any
}

const UploadContext = createContext<UploadContextData>({} as UploadContextData)

type ImageProps = ImageLibraryOptions

export const UplaodPovider: React.FC = ({children}, options: ImageProps) => {
  const [photo, setPhoto] = useState(null)

  const chooseUpload = (): void => {
    launchImageLibrary(options, (response: any) => {
      if (response) {
        setPhoto(response.assets[0])
      }
    })
  }

  return (
    <UploadContext.Provider value={{chooseUpload, photoImage: photo}}>
      {children}
    </UploadContext.Provider>
  )
}

export default UploadContext
