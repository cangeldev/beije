import { View, useWindowDimensions, Text } from 'react-native';
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import colors from '../../assets/colors/colors';
import style from './style';
import { CustomSlider } from '../CustomSlider';

const BeijePedRoute = () => (
    <View style={style.container}>
        <CustomSlider
            product="standartPed"
            packages='beijePed'
        />
        <CustomSlider
            product="superPed"
            packages='beijePed'
        />
        <CustomSlider
            product="ultraPed"
            packages='beijePed'
        />
    </View>
);

const BeijeDailyPedRoute = () => (
    <View style={style.container}>
        <CustomSlider
            product="dailyPed"
            packages='beijeDailyPed'
        />
        <CustomSlider
            product="superDailyPed"
            packages='beijeDailyPed'
        />
    </View>
);

const BeijeTamponRoute = () => (
    <View style={style.container}>
        <CustomSlider
            product="miniTampon"
            packages='beijeTamponPed'
        />
        <CustomSlider
            product="standartTampon"
            packages='beijeTamponPed'
        />
    </View>
);

const renderScene = SceneMap({
    first: BeijePedRoute,
    second: BeijeDailyPedRoute,
    third: BeijeTamponRoute
});

export const TabViewContainer = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'beije Ped' },
        { key: 'second', title: 'beije Günlük Ped' },
        { key: 'third', title: 'beije Tampon' },
    ]);
    return (
        <TabView style={style.header} renderTabBar={(props) => (
            <TabBar
                {...props}
                renderLabel={({ route, focused }) => (
                    <Text style={[
                        { color: focused ? colors.customBlack : "grey" },
                        style.tabViewHeaderTitle]}>
                        {route.title}
                    </Text>)}
                indicatorStyle={style.indicatorStyle}
                style={style.headerTitle}
            />
        )}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}
