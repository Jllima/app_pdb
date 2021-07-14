import React, {useState} from 'react'
import {SafeAreaView} from 'react-native'
import {Select} from '@pdb/presentation/components'

const FormOS: React.FC = () => {
  const [list] = useState([
    {
      id: 1,
      description: 'Óleo baixo',
    },
    {
      id: 2,
      description: 'Perda de força',
    },
    {
      id: 3,
      description: 'Aquecendo',
    },
    {
      id: 4,
      description: 'Falhando',
    },
    {
      id: 5,
      description: 'Cortando o óleo/bico injetor',
    },
    {
      id: 6,
      description: 'Fumaçando',
    },
  ])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Select options={list} txt="Selecione o problema" />
    </SafeAreaView>
  )
}

export default FormOS
