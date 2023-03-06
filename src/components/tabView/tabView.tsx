import { View, useWindowDimensions, Text } from 'react-native';
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import colors from '../../assets/colors/colors';
import style from './style';
import { CustomSlider } from '../CustomSlider';

const FirstRoute = () => (
    <View style={style.container}>
        <CustomSlider title='Standart Ped' />
        <CustomSlider title='Süper Ped' />
        <CustomSlider title='Süper+ Ped' />
    </View>
);

const SecondRoute = () => (
    <View style={style.container}>
        <CustomSlider title='Günlük Ped' />
        <CustomSlider title='Süper Günlük Ped' />
    </View>
);

const ThirdRoute = () => (
    <View style={style.container}>
        <CustomSlider title='Mini Tampon' />
        <CustomSlider title='Standar Tampon' />
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
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
