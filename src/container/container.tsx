import { View } from 'react-native'
import React from 'react'
import { CustomPacketScreen } from '../customPacketScreen'

export const Container = () => {

    return (
        <View style={{ flex: 1 }}>
            <CustomPacketScreen />
        </View>
    )
}