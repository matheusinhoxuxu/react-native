import React from 'react'
import Card from '../components/Card'
import { Button, Text } from 'react-native'

const Pag1 = ({ navigation }) => {


  return (
    <>
      <Button title='Pag 2' onPress={()=>navigation.navigate('Pag2')} />
      <Button title='Pag 3' onPress={()=>navigation.navigate('Pag3')} />
  
      
      

      <Card titulo="Sem conteúdo" />
      <Card titulo="Mobile">
        <Text>React Native</Text>
      </Card>

      <Card titulo="Principal" nome="Orion">
        <Text>Parágrafo 1</Text>
        <Text>Parágrafo 2</Text>
        <Text>Parágrafo 3</Text>
        <Button title='Detalhes' />
      </Card>

      <Card titulo="Flamengo Cheirinho">

      </Card>
    </>
  )
}

export default Pag1