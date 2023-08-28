import React from 'react'
import { AbsoluteWrapper, RowWrapper, Wrapper } from '../wrappers'
import { MediumText } from '../text'
import { Image } from 'react-native'
import RadialGradient from 'react-native-radial-gradient'
import  {styles} from './style'
import { totalSize } from 'react-native-dimension'
import { Spacer } from '../spacers'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { colors } from '../../constants'
const OnboardingSlide = ({image,destext,onPress, next,text,isActive,currentSlideIndex}) => {
  return (
    <RadialGradient
    style={styles.main}
    colors={["#9747FF","#512996", "#9747FF"]}
    radius={totalSize(90)}>
    <Image source={image}  />
    <Spacer isSmall/>
    <Wrapper style={styles.textwrapper}> 
    <MediumText style={styles.introtext}>{text}</MediumText>
    <Spacer isXBasic/>
    <MediumText style={styles.destext}>{destext}</MediumText>
    <Spacer isXBasic/>
    <AbsoluteWrapper style={styles.indicatorContainer}>
            {[1, 2, 3]?.map((_, index) => (
                <Wrapper
                    key={index}
                    style={[
                        styles.indicator,
                        currentSlideIndex == index &&
                        styles.dot,
                    ]}
                />
            ))}
        </AbsoluteWrapper>
    </Wrapper>
    <Spacer isBasic/>
    <TouchableOpacity style={styles.btn}
        onPress={onPress}>
          
       <Icon name='arrow-right' type='feather' color={colors.iconColor1}/>
      </TouchableOpacity>
  </RadialGradient>
  )
}

export default OnboardingSlide