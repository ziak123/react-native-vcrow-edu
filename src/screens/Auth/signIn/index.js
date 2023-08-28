import React from 'react'
import { ComponentWrapper,Wrapper} from '../../../components/wrappers'
import { TextInputUnderLine} from '../../../components/textInput'
import { MediumText } from '../../../components/text'
import { ButtonBorderd} from '../../../components/buttons'
import { Image } from 'react-native'
import { appImages } from '../../../utilities/assets'
import RadialGradient from 'react-native-radial-gradient'
import { styles } from './style'
import { Spacer } from '../../../components/spacers'
import { StatusBar } from 'react-native'
import { ScrollView } from 'react-native'
import { totalSize } from 'react-native-dimension'
import { SCREEN } from '../../../constants'
const SignIn = ({ navigation }) => {
    const { replace } = navigation
    return (
        <RadialGradient style={styles.main}  colors={["#9747FF", "#512996", "#9747FF"]}
        radius={totalSize(90)}>
            <StatusBar backgroundColor={'#512996'} />
            <Spacer isDouble />
            <Image source={appImages.splash} style={styles.logo} />
            <Wrapper style={styles.inputwrapper}>
            <ScrollView>
            <ComponentWrapper>
                <Spacer isBasic/>
                <TextInputUnderLine lefticonName={'mail'} lefticonType={"feather"} placeholder={"johndoe@email.com"} title={"Email"} titleStyle={styles.title} />
                <Spacer isXBasic/>
                <TextInputUnderLine lefticonName={'lock'} lefticonType={"feather"} placeholder={"***********"} title={"Password"} iconName="eye" iconType="feather" titleStyle={styles.title}/>
                <Spacer isBasic/>
                <MediumText style={styles.forgot} onPress={()=>navigation.navigate(SCREEN.forgotpassword)}>{"Forgot Password?"}</MediumText>
                <Spacer isXSmall/>
                <ButtonBorderd text='Log In'/>
                <Spacer isXBasic/>
                <MediumText style={styles.text}>{"Don’t have an account?"}</MediumText>
                <Spacer isTiny/>
                <ButtonBorderd style={styles.btn} text='Create an Account' textStyle={styles.btntext} onPress={()=>navigation.navigate(SCREEN.onboardingscrren)}/>
                <Spacer isXBasic/>
            </ComponentWrapper>
            </ScrollView>
            </Wrapper>
        </RadialGradient>
    )
}

export default SignIn