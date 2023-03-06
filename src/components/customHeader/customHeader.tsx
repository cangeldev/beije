import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { Menu, Person, Shopping } from '../../assets'

export const CustomHeader = () => {

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Beije.
            </Text>
            <Image
                source={Shopping}
                style={style.image}
            />
            <Image
                source={Person}
                style={style.image}
            />
            <Image
                source={Menu}
                style={style.image}
            />
        </View>
    )
}