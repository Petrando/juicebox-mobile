import { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
const mainLogo = require('../../../../assets/images/MainLogo.png')

const DiamondLogo = () => {
    const [ dimension, setDimension ] = useState(null)
  
    const handleLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setDimension({ width, height });
    };
  
    const logoHeight = dimension !== null?dimension.height * 0.84:0
    const logoWidth = 0.94 * logoHeight
    return (
        <View style={styles.diamond} onLayout={handleLayout}>
            {
            dimension !== null &&
                <Image source={mainLogo} style={{ width: logoWidth, height: logoHeight }}/>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    diamond: {
        flex: 346,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      mainLogo: {
        height: '84%',    
      },
})

export default DiamondLogo