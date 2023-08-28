import React from 'react'
import { ButtonBorderd, ButtonColored, ComponentWrapper,LinkModel,MainHeader, MainWrapper, Spacer, TextInputUnderLine } from '../../../components'
import { StatusBar } from 'react-native'
import { colors } from '../../../constants'
import { Title } from '../../../components/commonComponent'
import { Image } from 'react-native'
import { appImages } from '../../../utilities/assets'
import { styles } from './style'
import { useState } from 'react'

const ForgotPassword = () => {
   const [isModalVisible, setModalVisible] = useState(false);
   const closeModal = () => {
     setModalVisible(false);
   };
 
   // const closeModal = () => {
   //   setModalVisible(false);
   // };
  return (
   <MainWrapper>
    <StatusBar backgroundColor={colors.appBgColor2}/>
<MainHeader title={"Forgot Password?"} />
<ComponentWrapper>
   <Spacer isBasic/>
   <Image source={appImages.forogot} style={styles.img}/>
   <Spacer isBasic/>
   <TextInputUnderLine lefticonName={'mail'} lefticonType={"feather"} placeholder={"johndoe@email.com"} title={"Email"}  />
   <Spacer isXBasic/>
   <ButtonColored onPress={() => setModalVisible(true)} text='Send Link to Reset Password'/>
   <LinkModel onPressClose={closeModal} isModalVisible={isModalVisible}/>
</ComponentWrapper>
   </MainWrapper>
  )
}

export default ForgotPassword