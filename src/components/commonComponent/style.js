import { StyleSheet  } from "react-native";
import { colors } from "../../constants";
import { height, totalSize, width } from "react-native-dimension";
export const styles = StyleSheet.create({
    title:{
        color:colors.appTextColor3,
        fontSize:totalSize(3.88),
        fontWeight:'700',
        marginHorizontal:-2
    },
    wrap:{
        height:height(17.77),
        width:width(33.33),
        borderRadius:totalSize(2.22),
        backgroundColor:colors.appBgColor4,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    sug:{
        color:colors.appTextColor1,
        fontSize:totalSize(1.22),
        marginHorizontal:width(1)
    },
    row:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignSelf:'flex-start',
        alignItems:'center'
    },
    titletext:{
        color:colors.appTextColor3,
        fontSize:totalSize(2.88),
        alignSelf:'center',
        fontWeight:'700',
    },
      placeholderStyle: {
        fontSize: totalSize(1.44),
       color:colors.appTextColor2
      },
      selectedTextStyle: {
       
      },
      iconStyle: {
        width: width(6),
        height: width(6),
        color:colors.iconColor1
      },
      school:{
        width:width(91),
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      },
      container:{
        flexDirection:'row',
        alignItems:'center'
      },
      schoolname:{
        fontSize:totalSize(2)
      },
      maincontainer:{
        height:height(6),
        borderBottomWidth:totalSize(.1),
        borderColor:colors.borderColor3,
        justifyContent:'center',
      },
      card:{
        height:height(10.90),
        borderRadius:totalSize(1.55),
        width:width(90),
        backgroundColor:colors.appBgColor3,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:height(1.55)
      },
      name:{
        color:colors.appTextColor2,
        fontSize:totalSize(2),
        fontWeight:'700'
      },
      sub:{
        color:colors.appTextColor2,
        fontWeight:totalSize(1.6),
      },
      iconwrapper:{
        marginHorizontal:width(3),
        width:width(16.33)
      },
      pintext:{
        color:colors.appTextColor1,
        marginTop:-15,
        marginHorizontal:width(1)
      }
})