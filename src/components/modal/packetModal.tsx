import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { FC } from 'react'
import Modal from "react-native-modal";
import colors from '../../assets/colors/colors';
import style from './style';
import { Close, Refresh, Photo } from '../../assets';
import { CustomButton } from '../customButton';
import { PacketList } from '../packetList';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../features/store'
import { totalprice } from '../../features/beijePedsSlice';

interface IModal {
    visible: boolean
    onClick?: () => void;
}

export const PacketModal: FC<IModal> = ({ visible, onClick }) => {

    const dispatch = useDispatch()
    dispatch(totalprice())
    const title = useSelector((state: RootState) => state.beijePeds)
    const { standartPed, superPed, ultraPed } = title.beijePed;
    const { dailyPed, superDailyPed } = title.beijeDailyPed;
    const { miniTampon, standartTampon } = title.beijeTamponPed;

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
                    visible={
                        title.beijePed.standartPed.count +
                            title.beijePed.superPed.count +
                            title.beijePed.ultraPed.count == 0 ?
                            "none" : "flex"
                    }
                    text={((standartPed.count == 0 ? "" : `${standartPed.count} ${standartPed.title}`) +
                        " " + (superPed.count == 0 ? "" : `${superPed.count} ${superPed.title}`) +
                        " " + (ultraPed.count == 0 ? "" : `${ultraPed.count} ${ultraPed.title}`))
                    }
                    title=' Ped Paketleri'
                />
                <PacketList
                    visible={
                        title.beijeDailyPed.dailyPed.count
                            + title.beijeDailyPed.superDailyPed.count == 0 ?
                            "none" : "flex"
                    }
                    text={((dailyPed.count == 0 ? "" : `${dailyPed.count} ${dailyPed.title}`) +
                        " " + (superDailyPed.count == 0 ? "" : `${superDailyPed.count} ${superDailyPed.title}`))
                    }
                    title=' Günlük Ped Paketleri'
                />
                <PacketList
                    visible={
                        title.beijeTamponPed.miniTampon.count +
                            title.beijeTamponPed.standartTampon.count == 0 ?
                            "none" : "flex"
                    }
                    text={((miniTampon.count == 0 ? "" : `${miniTampon.count} ${miniTampon.title}`) +
                        " " + (standartTampon.count == 0 ? "" : `${standartTampon.count} ${standartTampon.title}`))
                    }
                    title=' Tampon Paketleri'
                />
                <View
                    style={style.buttonView}>
                    <CustomButton
                        disable={title.total == 0 ? true : false}
                        title={"Sepete Ekle (₺" + title.total + ")"}
                    />
                </View>

            </View>
        </Modal>
    )
}
