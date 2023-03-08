import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IButton {
    onClick?: () => void;
    title: string,
    disable?: boolean,
}
export const CustomButton: FC<IButton> = ({ onClick, title, disable }) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            disabled={disable}
            style={disable ? style.touchable : null}>
            <Text style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
