import { View, Text } from 'react-native'
import React from 'react'
import { ButtonBorderd, ButtonColored, ComponentWrapper, DeletProfileKidsCardModel, MainWrapper, Spacer, Wrapper } from '../../../components'
import { Title } from '../../../components/commonComponent'
import { Card } from '../../../components/listComponent'
import { ProfileCards, SCREEN, colors } from '../../../constants'
import { styles } from './style'
import { useState } from 'react'

const KidsProfile = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <MainWrapper>
        <Spacer isBasic/>
        <ComponentWrapper>
        <Title title={"Kid Profiles"}/>
        <Spacer isBasic/>
        <Card data={ProfileCards} onPressEdit={()=>navigation.navigate(SCREEN.setupkidsprofile)}  onPressDelete={() => setModalVisible(true)}/>
        <DeletProfileKidsCardModel onPressClose={closeModal} isModalVisible={isModalVisible}/>
        <Spacer isSmall/>
        <ButtonBorderd style={styles.btn} text='Add More Kids' textColor={colors.appTextColor3} onPress={()=>navigation.navigate(SCREEN.setupkidsprofile)} />
        </ComponentWrapper>
        <Wrapper style={styles.buttn}>
        <ButtonColored text='Continue' onPress={()=>navigation.navigate(SCREEN.createpin)}/>
        </Wrapper>
    </MainWrapper>
  )
}

export default KidsProfile
