import { StyleSheet } from "react-native";
import { width } from "react-native-dimension";
import { colors } from "../../../constants";
export const styles= StyleSheet.create({
    input:{
        width:width(43.58),
    },
    name:{
        width:width(90)
    },
    check:{
        width:width(63),
    },
    checktxt:{
        color:colors.appTextColor1
    }
})