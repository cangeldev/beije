import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IPacketList {
    title: string,
    text: string
}
export const PacketList: FC<IPacketList> = ({ title, text }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <Text style={style.text}>
                {text}
            </Text>
            <Text style={style.deleteText}>
                Paketten Çıkar
            </Text>
        </View>
    )
}