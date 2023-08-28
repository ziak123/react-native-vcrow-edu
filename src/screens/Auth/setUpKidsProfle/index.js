import { View, Text } from 'react-native'
import React from 'react'
import { ButtonColored, ComponentWrapper, LinkModel, MainWrapper, RowWrapper, ScrollView, SelectSchool, SelectSubject, SelectYear, Spacer, TextInputColored, TextInputUnderLine } from '../../../components'
import { DropDownComponent, ProfileComponent, SuggestionText, Title } from '../../../components/commonComponent'
import { StatusBar } from 'react-native'
import { EducationYear, SCREEN, SchoolSelectionList, Subjects, colors } from '../../../constants'
import { styles } from './style'
import { useState } from 'react'

const SetUpKidsProfile = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [issubjectModalVisible, setSubjModalVisible] = useState(false);
  const [isyearModalVisible, setYearModalVisible] = useState(false);
  const yearcloseModal = () => {
    setYearModalVisible(false);
  };
  const SubjectcloseModal = () => {
    setSubjModalVisible(false);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <MainWrapper>
            <StatusBar backgroundColor={colors.appBgColor2}/>
      <ComponentWrapper>
      <Spacer isXBasic/>
      <Title title={"Setup Kid's Profile"}/>
      <Spacer isXSmall />
      </ComponentWrapper>
      <ScrollView>
      <ProfileComponent />
      <Spacer  isBasic/>
      <RowWrapper >
   <TextInputUnderLine  containerStyle={styles.input} placeholder={"Aohan"} title="First Name"/>
   <TextInputUnderLine containerStyle={styles.input} placeholder={"johan"} title="First Name"/>
   </RowWrapper>
   <Spacer  isBasic/>
   <ComponentWrapper>
   <TextInputUnderLine  inputStyle={styles.inputs} placeholder={"62/31/2010"} title="Date of Birth" iconName={"calendar"} iconType={"feather"}/>
   <Spacer  isBasic/>
   <TextInputUnderLine  inputStyle={styles.inputs} lefticonName={'mail'} lefticonType={"feather"} placeholder={"johndoe@email.com"} title={"1st Parent Email"}/>
   <Spacer  isBasic/>
   <TextInputUnderLine  inputStyle={styles.inputs} lefticonName={'mail'} lefticonType={"feather"} placeholder={"johndoe@email.com"} title={"2st Parent Email"}/>
   <Spacer isBasi/>
   <TextInputUnderLine onPress={() => setModalVisible(true)} iconName={"chevron-small-down"}  iconType={"entypo"} isButton={true} inputStyle={styles.inputs}  placeholder={"WonderKids Learning Skill"} title={"School (Option)"}/>
  <SelectSchool onPress={closeModal} data={SchoolSelectionList} isModalVisible={isModalVisible}/>
  <Spacer isSmall/>
  <SuggestionText title={"The kids will get random questions from this school"}/>
  <Spacer isBasi/>
   <TextInputUnderLine  onPress={() => setYearModalVisible(true)}  iconName={"chevron-small-down"} iconType={"entypo"} isButton={true} inputStyle={styles.inputs}  placeholder={"Year 1"} title={"School (Option)"}/>
 <SelectYear  onPress={yearcloseModal} data={EducationYear} isModalVisible={isyearModalVisible}/>
 
  <Spacer isSmall/>
  <SuggestionText title={"This will be used to align questions with their academic needs"}/>
  <Spacer isBasi/>
  <TextInputUnderLine onPress={() => setSubjModalVisible(true)}  iconName={"chevron-small-down"} iconType={"entypo"} isButton={true} inputStyle={styles.inputs}  placeholder={"English Maths"} title={"Subject"}/>
 <SelectSubject data={Subjects} onPress={SubjectcloseModal}  isModalVisible={issubjectModalVisible}/>
 
  <Spacer isSmall/>
  <SuggestionText title={"The kids will get random questions from this school"}/>
  <Spacer isBasic/>
  <ButtonColored onPress={()=>navigation.navigate(SCREEN.kidsprofile)} text='Add Kid Profile'/>
  <Spacer isBasic/>
   </ComponentWrapper>
   </ScrollView>
    </MainWrapper>
  )
}

export default SetUpKidsProfile