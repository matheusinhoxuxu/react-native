import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import styles from '../styles/styles'

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
            <View style={styles.linha}>
            <Button mode="contained" onPress={remover}>-</Button>

            <Text style={styles.texto}>{qtd}</Text>

            <Button mode="contained" onPress={adicionar}>+</Button>
            </View>
        </>
    )
}

export default Estado 
