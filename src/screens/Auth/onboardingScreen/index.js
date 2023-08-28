import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Slides } from '../../../constants/dummyData';
import { MainWrapper, Wrapper } from '../../../components/wrappers';

import { MediumText, ModalContent } from '../../../components';
import OnboardingSlide from '../../../components/onboardingSlide';
import { FlatList } from 'react-native';
import { styles } from './style';
import { useRef } from 'react';
import { SCREEN } from '../../../constants';
import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  //State
  const [showModal, setShowModal] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
 

  //image select in model function
  

  //slides function
  const flatListRef = useRef(null);
  const { width } = useWindowDimensions();

  const slides = Slides;

  const handleSlideChange = (index) => {
    console.log(index)
    setActiveSlide(index);
  };

   useEffect(()=>{
    setActiveSlide(activeSlide)
   }, [activeSlide])

  const handleButtonPress = () => {
    if (activeSlide === slides.length - 1) {
      setShowModal(true);
    } else {
      const nextSlideIndex = activeSlide + 1;
      setActiveSlide(nextSlideIndex);
      setActiveDotIndex(activeDotIndex + 1)
      flatListRef.current.scrollToIndex({ animated: true, index: nextSlideIndex });
    }
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
};

const updateDotIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveDotIndex(currentIndex)
    setCurrentSlideIndex(currentIndex);
    // console.log(currentIndex)
};

  return (
    <MainWrapper>
      <FlatList
        ref={flatListRef}
        data={slides}
        // onIndexChanged={handleSlideChange}
        horizontal={true}
        pagingEnabled
        style={styles.flatlist}
        keyExtractor={(item) => item.id}
        onMomentumScrollBegin={updateCurrentSlideIndex}
        onMomentumScrollEnd={updateDotIndex}
        renderItem={({ item, index }) => (
          <OnboardingSlide next={activeSlide === slides.length - 1  }
            onPress={handleButtonPress} key={index} image={item.image} text={item.text} destext={item.des} isActive={index === activeSlide} currentSlideIndex={currentSlideIndex}/>
        )}
      />
      
      {showModal && <ModalContent navigation={navigation} />}
    </MainWrapper>
  );
};

export default OnboardingScreen;
