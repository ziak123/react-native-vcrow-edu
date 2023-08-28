import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { height, totalSize, width } from "react-native-dimension";
export const styles= StyleSheet.create({
    main:{
        flex:1,
        width:width(100),
        alignItems:'center',
        justifyContent:'center'
    },
    introtext:{
        color:colors.appTextColor2,
        fontSize:totalSize(3.22),
        textAlign:'center'
    },
    textwrapper:{
        width:width(89.74),
    },
    destext:{
        color:colors.appTextColor2,
        textAlign:'center'
    },
    dot:{
        height:height(2),
        width:width(3.84),
         backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(3)
    },
    dotcontainer:{
        width:width(19.23),
        alignSelf:'center'
    },
    activeDot:{
        backgroundColor:colors.appBgColor2
    },
    inactiveDot:{
        backgroundColor:colors.appBgColor3
    },
    btn:{
        position:'absolute',
        bottom:totalSize(3),
        height:height(7.66),
        width:width(15),
        backgroundColor:colors.appButton2,
        borderRadius:totalSize(6.4),
        justifyContent:'center',
        alignItems:'center'
    },

    indicatorContainer: {
        bottom: 0,
        right: 0, left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    indicator: {
        height:height(2),
        width:width(3.84),
         backgroundColor:colors.appBgColor2,
        borderRadius:totalSize(3),
        marginHorizontal: width(1.5),
        backgroundColor:colors.appBgColor3
    },
    selectedIndicator: {
        backgroundColor: 'green',
        height: height(1),
        width: height(3),
        borderRadius: height(0.9),
    },

})