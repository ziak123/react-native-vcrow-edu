import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export const ScrollView = props => {
    const { children, style, animation } = props
    return (
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
        // keyboardShouldPersistTaps="always"
        // nestedScrollEnabled
        >
            {children}
        </KeyboardAwareScrollView>
    );
}