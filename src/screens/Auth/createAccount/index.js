import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './style'
import { ButtonBorderd, ButtonColored, ComponentWrapper, MainHeader, MainWrapper, PrimaryCheckBox, RowWrapper, ScrollView, Spacer, TextInputUnderLine, Wrapper } from '../../../components'
import { ProfileComponent, Title } from '../../../components/commonComponent'
import { SCREEN } from '../../../constants'

const CreateAccount = ({navigation}) => {
  return (
    <MainWrapper>
   <MainHeader title={"Create an Acount"}/>
   <ScrollView>
   <ComponentWrapper>
   <Spacer isXBasic/>
   <ProfileComponent />
   <Spacer isBasic/>
   </ComponentWrapper>
   <RowWrapper >
   <TextInputUnderLine containerStyle={styles.input} placeholder={"johan"} title="First Name"/>
   <TextInputUnderLine containerStyle={styles.input} placeholder={"johan"} title="First Name"/>
   </RowWrapper>
   <ComponentWrapper>
    <Spacer isBasic/>
   <TextInputUnderLine lefticonName={'mail'} lefticonType={"feather"} placeholder={"johndoe@email.com"} title={"Email"}/>
   <Spacer isBasic/>
   <TextInputUnderLine  lefticonName={'lock'} lefticonType={"feather"} placeholder={"***********"} title={"Password"} iconName="eye" iconType="feather"/>
   <Spacer isBasic/>
   <TextInputUnderLine lefticonName={'lock'} lefticonType={"feather"} placeholder={"***********"} title={"Confirm Password"} iconName="eye" iconType="feather"/>
   <Wrapper style={styles.check}>
   <Spacer isBasic/>
   <PrimaryCheckBox text={"I agree to the Terms of Service and Privacy Policy"}  textStyle={styles.checktxt}/>
   </Wrapper>
   <Spacer isBasic/>
   <ButtonColored text='Register' textStyle={styles.btntext} onPress={()=>navigation.navigate(SCREEN.setupkidsprofile)} />
   </ComponentWrapper>
   </ScrollView>
   </MainWrapper>
  )
}

export default CreateAccount