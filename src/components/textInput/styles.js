import { StyleSheet } from "react-native";
import { height, width, totalSize } from 'react-native-dimension'
import { colors, sizes } from "../../constants";
export const styles = StyleSheet.create({
    textInputBorderedContainer: {
        height: height(6.05),
        borderColor: colors.borderColor1,
        backgroundColor: colors.appBgColor2,
        borderBottomWidth:1.3,
        marginTop:-3,
        width:width(89.74),
        alignSelf:'center'
    },
    textInputSearch: {
        borderRadius: totalSize(2),
        borderWidth: 0,
        backgroundColor: colors.appBgColor6,
        height: height(5),
    },
    buttontext:{
        fontSize:totalSize(2.1),
        color:colors.appTextColor5
    }

})