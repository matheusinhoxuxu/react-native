import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

const Objeto = () => {

    const carros = [
        { marca: 'VW', modelo: "Fusca", ano: '1978', cor: 'Preto', foto: '' },
        { marca: 'GM', modelo: "Celta", ano: '2003', cor: 'Preto', foto: '' },
        { marca: 'Fiat', modelo: "Palião", ano: '1995', cor: 'Azul', foto: '' },
        { marca: 'VW', modelo: "Gol", ano: '2010', cor: 'Vermelho', foto: '' },
        { marca: 'Ford', modelo: "Ka", ano: '2020', cor: 'Prata', foto: '' }
    ]

    
    return (
        <>
            {carros.map(item => (
                <Card style={{ marginBottom: 20 }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    
                    
                    
                </Card>
            ))}
        </>
    )
}

export default Objeto