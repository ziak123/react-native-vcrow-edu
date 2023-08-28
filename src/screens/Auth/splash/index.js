import { View, Text, Image } from 'react-native'
import React from 'react'
import { MainWrapper } from '../../../components/wrappers'
import { appImages } from '../../../utilities/assets'
import { styles } from './style'
import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient'
import { height, totalSize, width } from 'react-native-dimension'

const Splash = () => {
    return (
            <RadialGradient
                style={styles.main}
                colors={["#9747FF", "#512996", "#9747FF"]}
                radius={totalSize(90)}>
                <Image source={appImages.splash} />
            </RadialGradient>
    )
}

export default Splash