import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TinyTitle } from '../text';
import { Wrapper } from '../wrappers';
import { height, width, totalSize } from 'react-native-dimension'
import { colors, fontFamily } from '../../constants';
import { Icon } from 'react-native-elements';
import { Title } from '../commonComponent';
import { Spacer } from '../spacers';


export const MainHeader = ({ title }) => {
    const navigation = useNavigation();
    return (
        <Wrapper style={styles.main_view}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Icon name='arrow-left' type='feather' size={27} color={colors.iconColor3} />
            </TouchableOpacity>
            <Spacer isBasic/>
            <Title title={title} />
        </Wrapper>
    );
};



export const styles = StyleSheet.create({

    title: {
        color: colors.appTextColor5,
        fontFamily: fontFamily.appTextMedium,
        fontSize: totalSize(2.1)
    },
    main_view: {
        alignItems: 'flex-start',
        marginVertical: height(2.99),
        marginHorizontal: width(6),
    },
    pageName: {
        color: colors.appTextColor1,
        fontFamily: fontFamily.appTextMedium,
        fontSize: totalSize(2.1),
        alignSelf: 'center',
    },

})