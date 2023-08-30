import React, { useState } from 'react'
import { Button, Text } from 'react-native-paper'

const Estado = () => {

    const [qtd, setQtd] = useState(0)

    function adicionar() {
        setQtd(qtd + 1)
    }
    function remover(){
        setQtd(qtd-1)
    }
    return (
        <>
            <Button mode="contained" onPress={remover}>-</Button>

            <Text>{qtd}</Text>

            <Button mode="contained" onPress={adicionar}>+</Button>
        </>
    )
}

export default Estado