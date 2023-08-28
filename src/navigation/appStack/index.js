import React, { useRef } from 'react'
import { View, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as App from '../../screens/App'
import { SCREEN } from '../../constants';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.home}>

            <Screen name={SCREEN.home} component={App.Home} />
            <Screen name={SCREEN.profile} component={App.Profile} />

        </Navigator>
    );
};
export default AppNavigation


