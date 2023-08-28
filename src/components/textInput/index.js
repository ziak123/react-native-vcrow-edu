import React from 'react'
import { TouchableOpacity, TextInput, View, TextStyle, ViewStyle } from "react-native";
import { ComponentWrapper, Wrapper, RowWrapperBasic } from '../wrappers';
import { InputTitle, RegularText, SmallText, TinyText } from '../text';
import { Spacer } from "../spacers";
import { height, width, totalSize } from 'react-native-dimension';
import { styles } from './styles';
import { colors, fontFamily, sizes } from '../../constants';
import { appStyles } from '../../utilities';
import { Icon } from 'react-native-elements';


export const TextInputUnderLine = ({ autoFocus,lefticonName,lefticonType, iconName, error, onPressRight, iconType, required, left, onPress, content, keyboardType, title, isButton, titleStyle, placeholder, editable, animation, multiline, onFocus, buttonContentStyle, onBlur, onChangeText, rightStyle, secureTextEntry, value, iconColor, iconSize, containerStyle, inputContainerStyle, onPressIcon, inputStyle, right, iconStyle }) => {
    var focused = false
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
        >
            {
                title ?
                    <Wrapper style={{}}>
                        <InputTitle style={[titleStyle, { color: colors.appTextColor1, fontSize: totalSize(1.5),fontWeight:'700' }]}>
                            {title}
                            {required ?
                                <RegularText style={{ color: colors.appTextColor2 }}> *</RegularText>
                                : null
                            }
                        </InputTitle>
                    </Wrapper>
                    :
                    null
            }
            <Wrapper animation={animation} style={[styles.textInputBorderedContainer, containerStyle]}>
                <RowWrapperBasic style={[{
                    borderRadius: sizes.inputRadius,
                    borderWidth: 0,
                    borderColor: colors.appTextColor5
   
                }, inputContainerStyle]}>
                    {
                        lefticonName ?
                        <View style={{}}>
                        <Icon name={lefticonName} type={lefticonType} size={iconSize ? iconSize : sizes.icons.medium } color={iconColor ? iconColor : colors.iconColor1} iconStyle={iconStyle} style={{marginEnd: width(2)}} onPress={onPressIcon} />
                    </View> : null
                    }
                    
                    {
                        left ? left : null
                    }
                    <View style={{ flex: 8 }}>
                        {
                            isButton ?
                                content ?
                                    content
                                    :
                                    <ComponentWrapper style={[{ paddingVertical:height(1.3),right:width(5) }, buttonContentStyle]}>
                                        <RegularText style={styles.buttontext}>{value ? value : placeholder}</RegularText>
                                    </ComponentWrapper>
                                :
                                <TextInput
                                    autoFocus={autoFocus}
                                    onChangeText={onChangeText}
                                    value={value}
                                    placeholder={placeholder}
                                    editable={editable}
                                    keyboardType={keyboardType}
                                    multiline={multiline}
                                    placeholderTextColor={colors.appTextColor5}
                                    secureTextEntry={secureTextEntry}
                                    style={[appStyles.inputField,  inputStyle]}
                                />
                        }
                    </View>
                    {
                        right ?
                            <TouchableOpacity activeOpacity={.5}
                                style={[{ height: height(4), paddingHorizontal: 12 }, rightStyle]}
                                onPress={onPressRight}>
                                {right}
                            </TouchableOpacity>
                            :
                            iconName ?
                                <View style={{ padding: 4 }}>
                                    <Icon name={iconName} type={iconType} size={iconSize ? iconSize : sizes.icons.medium} color={iconColor ? iconColor : colors.iconColor1} iconStyle={iconStyle} onPress={onPressIcon} />
                                </View>
                                :
                                null
                    }

                </RowWrapperBasic>
            </Wrapper>
            {
                error ?
                    <ComponentWrapper style={{ marginLeft: width(0) }} animation="shake">
                        <Spacer height={sizes.TinyMargin} />
                        <SmallText>{error}</SmallText>
                    </ComponentWrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}


export const TextInputSearch = ({ autoFocus, right, left, editable, onPress, placeholder, onChangeText, value, onPressSearch, animation, containerStyle, filterIcon, onPressFilter }) => {
    return (
        <TextInputUnderLine
            autoFocus={autoFocus}
            onPress={onPress}
            editable={editable}
            containerStyle={[{borderRadius:totalSize(1.55), borderWidth: 0,borderColor:colors.appBorder6, height: height(5.68), justifyContent: 'center', backgroundColor: colors.appBgColor6 }, containerStyle]}
            inputContainerStyle={styles.textInputSearch}
            placeholderTextColor={colors.appTextColor5}
            placeholder={placeholder ? placeholder : "Search message"}
            onChangeText={onChangeText}
            value={value}
            animation={animation}
            disabled
            rightStyle={{ height: null }}
            left={left ? left : <Icon name="search" type="feather" size={18} color={colors.appIconColor5} style={{ marginLeft: 10 }} />}
            right={filterIcon && <Icon name="options-outline" type="ionicon" size={22} color={colors.appIconColor4} style={{ marginLeft: 10 }} onPress={onPressFilter} />}
        />
    )
}



