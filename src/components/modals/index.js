import React from 'react';
import { height, totalSize, width } from 'react-native-dimension';
// import Modal from 'react-native-modal';
import { ButtonBorderd, ButtonColored, ComponentWrapper, MainWrapper, MediumText, RowWrapper, Spacer, TextInputSearch, Wrapper, } from '..';
import { Modal, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { StatusBar } from 'react-native';
import { SCREEN, colors } from '../../constants';
import { appIcons } from '../../utilities/assets';
import { useState } from 'react';
import { ModelTile, SelectionYear } from '../commonComponent';
import { EducationYear, SchoolSelection, SubjectComponent } from '../listComponent';
import { Icon } from 'react-native-elements';

// export const PrimaryModal = ({ isVisible, toggleModal, swipeDisabled, onPressCancelDelivery, onPressKeepDelivery, onPressClose }) => {
//     return (
//         <Modal
//             animationType="slide"
//             isVisible={isVisible}
//             swipeDirection={swipeDisabled ? null : 'down'}
//             onSwipeComplete={toggleModal}
//             style={styles.modal}
//             onBackdropPress={toggleModal}
//             backdropOpacity={0.3}
//         >
//             <Wrapper>

//             </Wrapper>
//         </Modal>
//     );
// };



// const styles = StyleSheet.create({

//     modal: {
//         marginHorizontal: width(10),
//         borderWidth: 0,
//     },



// })
export const ModalContent = ({ onPress, navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextPress = () => {
    // Navigate to the next screen or perform any other action
    closeModal();
  };


  const handleNavigation = () => {
    if (selectedOption === 'School') {
      navigation.navigate(SCREEN.schoolaccount);
    }
    else if(selectedOption === 'Parent'){
       navigation.navigate(SCREEN.createaccount);
    }
  };
  return (
    <Modal animationType="slide" visible={true} >
      <Wrapper style={styles.main}>
        <Wrapper style={styles.model}>
          <ComponentWrapper>
            <Spacer isBasic />
            <MediumText style={styles.text}>{"How would you like to use this app?"}</MediumText>
          </ComponentWrapper>
          <Spacer isBasic />
          <RowWrapper >
            <TouchableOpacity style={[styles.section, { borderColor: selectedOption == 'Parent' ? colors.borderColor3 : colors.borderColor4 }]} onPress={() => handleOptionSelect('Parent')}>
              <Image source={appIcons.parent} style={styles.img} />
              <Spacer isXSmall />
              <MediumText style={styles.icon}>{"Parent"}</MediumText>
            </TouchableOpacity>
            <Spacer isBasic horizontal />
            <TouchableOpacity style={[styles.section, { borderColor: selectedOption == 'School' ? colors.borderColor3 : colors.borderColor4 }]} onPress={() => handleOptionSelect('School')}>
              <Image source={appIcons.school} />
              <Spacer isXSmall />
              <MediumText style={styles.icon} >{"School"}</MediumText>
            </TouchableOpacity>
          </RowWrapper>
          <Spacer isBasic />
          <TouchableOpacity onPress={handleNavigation} disabled={selectedOption == null}
            style={styles.bttn} >
            <MediumText style={styles.btntext}>Continue</MediumText>
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};


export const LinkModel = ({ onPressClose, isModalVisible }) => {
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <Wrapper style={styles.main}>
        <Wrapper style={styles.linkmodel}>
          <Spacer isXBasic />
          <ComponentWrapper>
            <Wrapper style={styles.linkicon}>
                          <Image source={appIcons.link} style={styles.linkicon} />
            <TouchableOpacity onPress={onPressClose} style={{alignItems:'flex-end'}}>
          <Icon name='cross' type='entypo' style={{alignItems:'flex-end'}}/>
          </TouchableOpacity>
          </Wrapper>

            <Spacer isXBasic />
            <MediumText style={styles.text}>{"A link to reset your password has been sent to your email"}</MediumText>
            <Spacer isXBasic />
            <ButtonColored style={styles.bttn} text='Continue'  />
          </ComponentWrapper>
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

export const SelectSchool = ({ onPress,data, isModalVisible }) => {
  
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <Wrapper style={styles.main}>
        <Wrapper style={styles.SelectSchoolmodel}>
        <Spacer isBasic/>
          <RowWrapper style={styles.crossicon}>
          <ModelTile title={"Select School"}/>
          <TouchableOpacity onPress={onPress}>
          <Icon name='cross' type='entypo' style={{alignItems:'flex-end'}}/>
          </TouchableOpacity>
          </RowWrapper>
          <Spacer isXSmall/>
          <TextInputSearch placeholder={"Search School"}/>
          <Spacer isXBasic/>
          <SchoolSelection data={data}/>
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

export const SelectYear = ({ onPress,data, isModalVisible }) => {
  
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <Wrapper style={styles.main}>
        <Wrapper style={styles.SelectSchoolmodel}>
        <Spacer isBasic/>
          <RowWrapper style={styles.crossicon}>
          <ModelTile title={"Education Year"}/>
          <TouchableOpacity onPress={onPress}>
          <Icon name='cross' type='entypo' style={{alignItems:'flex-end'}}/>
          </TouchableOpacity>
          </RowWrapper>
          <Spacer isXBasic/>
          <EducationYear data={data}/>
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

export const SelectSubject = ({ onPress,data, isModalVisible }) => {
  
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <Wrapper style={styles.main}>
        <Wrapper style={styles.subject}>
        <Spacer isBasic/>
          <RowWrapper style={styles.crossicon}>
          <ModelTile title={"Subject"}/>
          <TouchableOpacity onPress={onPress}>
          <Icon name='cross' type='entypo' style={{alignItems:'flex-end'}}/>
          </TouchableOpacity>
          </RowWrapper>
          <Spacer isXBasic/>
          <SubjectComponent data={data}/>
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

export const DeletProfileKidsCardModel = ({ onPressClose,data, isModalVisible }) => {
  
  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <Wrapper style={styles.main}>
        <Wrapper style={styles.Del}>
        <Spacer isBasic/>
        <RowWrapper style={styles.crossicon}>
        <Image source={appIcons.Delete} style={styles.linkicon} />
          <TouchableOpacity onPress={onPressClose}>
          <Icon name='cross' type='entypo' style={{alignItems:'flex-end'}}/>
          </TouchableOpacity>
          </RowWrapper>
        <ComponentWrapper>
            <Spacer isSmall />
            <MediumText style={styles.text}>{"Are you sure you want to delete this Kid Profile?"}</MediumText>
            <Spacer isXBasic />
            <Wrapper style={styles.deletbtn}>
            <ButtonBorderd style={styles.bord} text='Continue' textColor={colors.appTextColor3} />
            <ButtonColored style={styles.colored} text='Continue' textColor={colors.appTextColor2}  />
            </Wrapper>
          </ComponentWrapper>
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}
