import { StyleSheet } from "react-native";
import { height, totalSize, width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    main:{
        flex:1,
    },
    logo:{
        alignSelf:'center'
    },
    inputwrapper:{
        height:height(50.47),
        position:'absolute',
        bottom:0,
        width:width(100),
        backgroundColor:colors.appBgColor2,
        borderTopLeftRadius:totalSize(1.77),
        borderTopRightRadius:totalSize(1.77)
    },
    forgot:{
        fontSize:totalSize(1.6),
        fontWeight:'800',
        color:colors.appTextColor3,
        alignSelf:'flex-end',
    },
    text:{
        fontSize:totalSize(1.6),
        fontWeight:'800',
        color:colors.appTextColor3,
        alignSelf:'center',
        right:width(1.88)
    },
    btn:{
     backgroundColor:colors.appButton2  
    },
    btntext:{
        color:colors.appTextColor3,
        fontSize:totalSize(1.8),
        fontWeight:'500'
    },
    title:{
        fontWeight:'700',
        fontSize:totalSize(1.5)
    }
})