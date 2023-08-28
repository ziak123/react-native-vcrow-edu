import { View, Text } from 'react-native'
import React from 'react'
import { ButtonColored, ComponentWrapper, MainHeader, MainWrapper, PrimaryCheckBox, ScrollView, Spacer, TextInputUnderLine, Wrapper } from '../../../components'
import { ProfileComponent } from '../../../components/commonComponent'
import { styles } from './style'

const SchoolAcount = () => {
  return (
   <MainWrapper>
    <MainHeader title={"Create a School Account"}/>
    <ScrollView>
   <ComponentWrapper>
   <Spacer isXBasic/>
   <ProfileComponent />
   <Spacer isBasic/>
   </ComponentWrapper>
   <ComponentWrapper>
   <Spacer isBasic/>
   <TextInputUnderLine  placeholder={"WonderKids Learning School"} title={"School Name"}   />
                <Spacer isXBasic/>
                <TextInputUnderLine lefticonName={'mail'} lefticonType={"feather"} placeholder={"johndoe@email.com"} title={"Email"}  />
                <Spacer isXBasic/>
                <TextInputUnderLine lefticonName={'lock'} lefticonType={"feather"} placeholder={"***********"} title={"Password"} iconName="eye" iconType="feather" />
               <Spacer isBasic/>
                <TextInputUnderLine lefticonName={'lock'} lefticonType={"feather"} placeholder={"***********"} title={"Password"} iconName="eye" iconType="feather" />
                <Wrapper style={styles.check}>
   <Spacer isBasic/>
   <PrimaryCheckBox text={"I agree to the Terms of Service and Privacy Policy"}  textStyle={styles.checktxt}/>
   </Wrapper>
   <Spacer isBasic/>
   <ButtonColored text='Register' textStyle={styles.btntext} />
   </ComponentWrapper>
   <Spacer isXBasic/>
   </ScrollView>
   </MainWrapper>
  )
}

export default SchoolAcount