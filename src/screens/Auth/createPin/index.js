import { View, Text } from 'react-native'
import React from 'react'
import { ButtonColored, ComponentWrapper, MainHeader, MainWrapper, Spacer } from '../../../components'
import { Image } from 'react-native'
import { appImages } from '../../../utilities/assets'
import { styles } from './style'
import { PinText } from '../../../components/commonComponent'
import { SCREEN } from '../../../constants'

const CreatePin = ({navigation}) => {
  return (
    <MainWrapper>
        <MainHeader title={"Create a PIN"}/>
        <ComponentWrapper>
        <PinText text={"This PIN will be used to access the app"}/>
        <Spacer isBasic/>
        <Image source={appImages.pin} style={styles.img}/>
            <ButtonColored text='Continue' onPress={()=>navigation.navigate(SCREEN.confirmpin)}/>
        </ComponentWrapper>
    </MainWrapper>
  )
}

export default CreatePin