import { height } from 'react-native-dimension'
import { colors } from '../colors';
export const SCREEN = {
    // stacks
    authStack: 'authStack',
    appStack: 'appStack',

    // AuthNavigation
    splash: 'splash',
    signIn: 'signIn',
    onboardingscrren:'onboardingscrren',
    forgotpassword:'forgotpassword',
    createaccount:'createaccount',
    schoolaccount:'schoolaccount',
    setupkidsprofile:'setupkidsprofile',
    kidsprofile:'kidsprofile',
    createpin:"createpin",
    confirmpin:'confirmpin',

    // AppNavigation
    home: 'home',
    profile: 'profile'

}


export const tabs = {
    screenOptions: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.appIconColor4,
        tabBarInactiveTintColor: colors.appIconColor3,
        tabBarStyle: {
            elevation: 15,
            backgroundColor: colors.appBgColor1,
            height: height(7)

        },
    }
};