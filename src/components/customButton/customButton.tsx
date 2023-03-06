import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'


export const CustomButton = () => {
    return (
        <TouchableOpacity >
            <Text style={style.text}>
                Paketini Gör
            </Text>
        </TouchableOpacity>
    )
}
