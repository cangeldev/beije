import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { CustomHeader } from '../components'
import colors from '../assets/colors/colors'
import style from './style'
import { TabViewContainer } from '../components/tabView'

export const CustomPacketScreen = () => {

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.backGround}
                barStyle={'dark-content'}
            />
            <CustomHeader />
            <Text style={style.title}>
                Kendi Paketini Oluştur
            </Text>
            <Text style={style.info}>Tercih ve ihtiyaçların
                doğrultusunda seçeceğin ürünlerden
                ve miktarlardan, sana özel bir paket oluşturalım.
            </Text>
            <TabViewContainer/>
        </View>
    )
}
