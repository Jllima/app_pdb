import React, {createContext, useState} from 'react'
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker'

interface UploadContextData {
  chooseUpload: () => void
  photoImage: any
  isLoading: boolean
}

const UploadContext = createContext<UploadContextData>({} as UploadContextData)

type ImageProps = ImageLibraryOptions

export const UplaodPovider: React.FC = ({children}, options: ImageProps) => {
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)

  const chooseUpload = (): void => {
    setLoading(true)
    launchImageLibrary(options, (response: any) => {
      if (response && typeof response.assets !== 'undefined') {
        setPhoto(response.assets[0])
        setLoading(false)
      } else {
        setPhoto(null)
        setLoading(false)
      }
    })
  }

  return (
    <UploadContext.Provider
      value={{chooseUpload, photoImage: photo, isLoading: loading}}>
      {children}
    </UploadContext.Provider>
  )
}

export default UploadContext
