import { Icon } from "react-native-elements"
import { LargeText, MediumText, RegularText } from "../text"
import { ComponentWrapper, RowWrapper, Wrapper } from "../wrappers"
import {styles} from './style'
import { TouchableOpacity,Image } from "react-native"
import { colors } from "../../constants"
import { totalSize } from "react-native-dimension"
import { Spacer } from "../spacers"
import { Dropdown } from "react-native-element-dropdown"
import { useState } from "react"
import { RadioButton } from "react-native-paper"
import { PrimaryCheckBox } from "../checkBoxs"
export const Title= ({title})=>{
return(
    <LargeText style={styles.title}>{title}</LargeText>
)
}

export const ProfileComponent =()=>{
    return(
        <TouchableOpacity style={styles.wrap}>
            <Icon name="camera" type="feather" />
        </TouchableOpacity>
    )
}

export const SuggestionText =({title})=>{
    return(
        <Wrapper style={styles.row}>
            <Icon name="exclamation" type="evilicon" color={colors.iconColor1}/>
            <MediumText style={styles.sug}>{title}</MediumText>
        </Wrapper>
    )
}

// export const DropDownComponent = ({caption,title,data,style})=>{
//     const [value, setValue] = useState(null);
//     const [isFocus, setIsFocus] = useState(false);
//     return(
//   <Wrapper style={styles.dropdownmain}>
//     <RegularText style={styles.titletxt}>{title }</RegularText>
//     <Spacer isTiny/>
//     <Spacer isTiny/>
//   <Dropdown
//             style={[styles.dropdown,style]}
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={styles.selectedTextStyle}
//             inputSearchStyle={styles.inputSearchStyle}
//             iconStyle={styles.iconStyle}
//             data={data}
//             search
//             maxHeight={200}
//             labelField="label"
//             valueField="value"
//             placeholder={caption}
//             // searchPlaceholder="Search..."
//             value={value}
//             onChange={item => {
//               setValue(item.value);
//               setIsFocus(false);
//             }}          
//           />
//           <Spacer isTiny/>
//   </Wrapper>
//     )
//   }

export const ModelTile=({title})=>{
  return(
    <MediumText style={styles.titletext}>{title}</MediumText>
  )
}

export const SelectionComponent=({image,title,style})=>{
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState('first');
  const handleToggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return(
    <Wrapper  style={[styles.maincontainer,style]}>
      <Wrapper style={styles.school}>
        <Wrapper style={styles.container}>
        {isChecked ? (
            <RadioButton
            value="Checked" onPress={handleToggleCheck}
            status={ checked === 'first' ? 'checked' : 'unchecked' }
      />
      ) : (
      <RadioButton
      value="Unchecked" onPress={handleToggleCheck} 
      status={ checked === 'second' ? 'checked' : 'unchecked' }
      />)}
          <MediumText style={styles.schoolname}>{title}</MediumText>
        </Wrapper>
        <Image source={image}/>
      </Wrapper>
    </Wrapper>
  )
}

export const SelectionYear=({image,title,style})=>{
  const [isChecked, setIsChecked] = useState(false);
  const [checked, setChecked] = useState('first');
  const handleToggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return(
    <Wrapper  style={[styles.maincontainer,style]}>
      <Wrapper style={styles.school}>
        <Wrapper style={styles.container}>
        {isChecked ? (
            <RadioButton
            value="Checked" onPress={handleToggleCheck}
            status={ checked === 'first' ? 'checked' : 'unchecked' }
      />
      ) : (
      <RadioButton
      value="Unchecked" onPress={handleToggleCheck} 
      status={ checked === 'second' ? 'checked' : 'unchecked' }
      />)}
          <MediumText style={styles.schoolname}>{title}</MediumText>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export const SelectionSubject=({image,title,style})=>{

  
  return(
    <Wrapper  style={[styles.maincontainer,style]}>
      <Wrapper style={styles.school}>
        <Wrapper style={styles.container}>
       <PrimaryCheckBox/>
          <MediumText style={styles.schoolname}>{title}</MediumText>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}


export const KidsProfileCard=({image,name,year,subj,onPressDelete,onPressEdit})=>{
  return(
    <Wrapper style={styles.card}>
    <RowWrapper>
      <Image source={image}/>
      <Spacer isSmall  horizontal/>
      <Wrapper>
        <MediumText style={styles.name}>{name}</MediumText>
        <MediumText style={styles.sub}>{year}</MediumText>
        <MediumText style={styles.sub}>{subj}</MediumText>
      </Wrapper>
    </RowWrapper>
    <RowWrapper style={styles.iconwrapper}>
      <TouchableOpacity onPress={onPressEdit}>
      <Icon name="edit" type="feather" size={19} color={colors.iconColor2}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete}>
      <Icon name="delete-outline" type="material" size={24} color={colors.iconColor2}/>
      </TouchableOpacity>
    </RowWrapper>
    </Wrapper>
  )
}

export const PinText=({text})=>{
  return(
    <MediumText style={styles.pintext}>{text}</MediumText>
  )
}