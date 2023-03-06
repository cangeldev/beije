import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { FC } from 'react'
import Modal from "react-native-modal";
import colors from '../../assets/colors/colors';
import style from './style';
import { Close, Refresh, Photo } from '../../assets';
import { CustomButton } from '../customButton';
import { PacketList } from '../packetList';

interface IModal {
    visible: boolean
    onClick?: () => void;
}

export const PacketModal: FC<IModal> = ({ visible, onClick }) => {
    return (
        <Modal isVisible={visible}
            onBackdropPress={onClick}>
            <View style={style.container}>
                <StatusBar
                    backgroundColor={colors.customBlack}
                    barStyle={"light-content"}
                />
                <View style={style.headerView}>
                    <Text style={style.headerTitle}>
                        Özel Paketin
                    </Text>
                    <TouchableOpacity
                        style={style.close}
                        onPress={onClick}>
                        <Image
                            source={Close}
                            style={style.close}
                        />
                    </TouchableOpacity>
                </View>
                <View style={style.infoView}>
                    <Image
                        source={Refresh}
                        style={style.refresh}
                    />
                    <Text style={style.infoText}>
                        2 ayda 1 gönderim
                    </Text>
                </View>
                <Image
                    source={Photo}
                    style={style.photo}
                />
                <PacketList
                    text=' 20 Standart Ped ve 10 Süper Ped'
                    title=' Ped Paketleri'
                />
                <View style={style.buttonView}>
                    <CustomButton />
                </View>
            </View>
        </Modal>
    )
}
