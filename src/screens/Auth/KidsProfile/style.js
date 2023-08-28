import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { height, width } from "react-native-dimension";
export const styles =StyleSheet.create({
    btn:{
        backgroundColor:colors.appButton2  
       },
       buttn:{
 position:'absolute',
 bottom:height(4),
 width:width(90),
 alignSelf:'center'
       }
})