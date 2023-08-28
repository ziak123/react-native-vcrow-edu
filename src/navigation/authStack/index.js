import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN } from '../../constants';
import * as Auth from '../../screens/Auth'
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.signIn}>
            <Screen name={SCREEN.signIn} component={Auth.SignIn} />
            <Screen name={SCREEN.onboardingscrren} component={Auth.OnboardingScreen} />
            <Screen name={SCREEN.forgotpassword} component={Auth.ForgotPassword} />
            <Screen name={SCREEN.createaccount} component={Auth.CreateAccount} />
            <Screen name={SCREEN.schoolaccount} component={Auth.SchoolAcount} />
            <Screen name={SCREEN.setupkidsprofile} component={Auth.SetUpKidsProfile}/>
            <Screen name={SCREEN.kidsprofile} component={Auth.KidsProfile}/>
            <Screen name={SCREEN.createpin} component={Auth.CreatePin}/>
            <Screen name={SCREEN.confirmpin} component={Auth.ConfirmPin}/>
        </Navigator>
    );
};
export default AuthNavigation;