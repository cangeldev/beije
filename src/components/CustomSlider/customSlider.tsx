import { View, Text, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import Slider from '@react-native-community/slider';
import style from './style';
import colors from '../../assets/colors/colors';
import { Chat } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, } from '../../features/beijePedsSlice';
import { RootState } from "../../features/store"
interface ISlider {
    packages: string,
    product: string
}

export const CustomSlider: FC<ISlider> = ({ packages, product }) => {
    const [value, setValue] = React.useState(0)
    const dispatch = useDispatch();
    dispatch(changeCount({ intCount: value, packages: packages, product: product }));
    const titleName =
        useSelector((
            state: RootState) => state.beijePeds[packages][product].title)
    const countValue =
        useSelector((
            state: RootState) => state.beijePeds[packages][product].count)
    return (
        <View style={style.container}>
            <Text style={style.title}>{titleName}</Text>
            <ImageBackground
                source={Chat}
                style={[style.image, { marginLeft: value * 5.30 }]}>
                <Text style={style.value}>
                    {countValue}
                </Text>
            </ImageBackground>
            <Slider
                style={style.slider}
                minimumValue={0}
                maximumValue={60}
                minimumTrackTintColor={colors.customBlack}
                maximumTrackTintColor={colors.black}
                thumbTintColor={colors.customBlack}
                step={10}
                value={value}
                onValueChange={setValue}
            />
            <View style={style.contentView}>
                <Text style={{
                    fontSize: 16, fontFamily: "Gordita Regular",
                    color: colors.customBlack,
                }}>
                    0
                </Text>
                <Text style={{
                    fontSize: 16, fontFamily: "Gordita Regular",
                    color: colors.customBlack,
                }}>
                    60
                </Text>
            </View>
        </View>
    )
}
