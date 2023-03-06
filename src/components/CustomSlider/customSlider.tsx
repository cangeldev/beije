import { View, Text, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import Slider from '@react-native-community/slider';
import style from './style';
import colors from '../../assets/colors/colors';
import { Chat } from '../../assets';

interface ISlider {
    title: string
}

export const CustomSlider: FC<ISlider> = ({ title }) => {
    const [value, setValue] = React.useState(0)

    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <ImageBackground
                source={Chat}
                style={[style.image, { marginLeft: value * 5.30 }]}>
                <Text style={style.value}>
                    {value}
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
