import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { CustomHeader } from '../components'
import colors from '../assets/colors/colors'
import style from './style'

export const CustomPacketScreen = () => {
    
    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.backGround}
                barStyle={'dark-content'}
            />
            <CustomHeader />
        </View>
    )
}
