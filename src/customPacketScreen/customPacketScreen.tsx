import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { CustomButton, CustomHeader, TabViewContainer } from '../components'
import colors from '../assets/colors/colors'
import style from './style'
import { PacketModal } from '../components/modal'

export const CustomPacketScreen = () => {

    const [ModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!ModalVisible);
    };
    function handleInputToggle() {
        setModalVisible(!ModalVisible)
    }

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
            <Text style={style.info}>
                Tercih ve ihtiyaçların
                doğrultusunda seçeceğin ürünlerden
                ve miktarlardan, sana özel bir paket oluşturalım.
            </Text>
            <TabViewContainer />
            <CustomButton
                onClick={toggleModal}
                title=" Paketini Gör"
            />
            <PacketModal
                visible={ModalVisible}
                onClick={handleInputToggle}
            />
        </View>
    )
}
