import { View, useWindowDimensions, Text } from 'react-native';
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';
import colors from '../../assets/colors/colors';
import style from './style';

const FirstRoute = () => (
    <View style={style.container}>
        <Text>1.</Text>
    </View>
);

const SecondRoute = () => (
    <View style={style.container}>
        <Text>2.</Text>
    </View>
);
const ThirdRoute = () => (
    <View style={style.container}>
        <Text>3.</Text>
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
