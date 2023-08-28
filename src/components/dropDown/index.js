import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Wrapper } from '../wrappers'
import DropDownPicker from 'react-native-dropdown-picker'
import { colors, fontFamily } from '../../constants';
import { height, width, totalSize } from 'react-native-dimension'
import { InputTitle } from '../text';

const useCustomDropDown = (initialItems) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState(initialItems);

    return { open, setOpen, value, setValue, items, setItems };
};

const PrimaryDropDown = ({ title = 'City', initialItems, placeholder, style }) => {
    const { open, setOpen, value, setValue, items, setItems } = useCustomDropDown(initialItems);
    return (
        <Wrapper style={[{ zIndex: 1 }, style]}>
            <InputTitle style={styles.propertyType}>{title}</InputTitle>
            <DropDownPicker
                placeholder={placeholder ? placeholder : 'Select your city'}
                placeholderStyle={{ color: colors.appTextColor8 }}
                showTickIcon={true}
                style={[styles.dropDown,]}
                open={open}
                setOpen={setOpen}
                value={value}
                setValue={setValue}
                items={items}
                setItems={setItems}
                listMode="FLATLIST"
                dropDownContainerStyle={[styles.dropDownContainer, { zIndex: 1 }]}
            />
        </Wrapper>
    )
}

export default PrimaryDropDown

const styles = StyleSheet.create({
    propertyType: {
        color: colors.appTextColor3,
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: totalSize(1.7)
    },
    dropDown: {
        borderWidth: 1,
        height: height(6),
        borderRadius: totalSize(1.5),
        borderColor: colors.appBorderColor3,
        backgroundColor: colors.appBgColor1,
    },
    dropDownContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.appBorderColor3,
        backgroundColor: colors.appBgColor1,
    },
})