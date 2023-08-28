import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, MainHeader, MainWrapper, Spacer } from '../../../components'
import { Image } from 'react-native'
import { appImages } from '../../../utilities/assets'
import { styles } from './style'
import { PinText } from '../../../components/commonComponent'

const ConfirmPin = () => {
  return (
    <MainWrapper>
        <MainHeader title={"Confirm Your PIN"}/>
        <ComponentWrapper>
        <PinText text={"This PIN will be used to access the app"}/>
        <Spacer isBasic/>
        <Image source={appImages.pin} style={styles.img}/>
            
        </ComponentWrapper>
    </MainWrapper>
  )
}

export default ConfirmPin