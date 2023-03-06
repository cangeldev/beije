import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IButton {
    onClick?: () => void;
}
export const CustomButton: FC<IButton> = ({ onClick }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Text style={style.text}>
                Paketini Gör
            </Text>
        </TouchableOpacity>
    )
}
