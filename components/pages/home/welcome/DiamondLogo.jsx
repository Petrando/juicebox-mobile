import { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
const mainLogo = require('../../../../assets/images/MainLogo.png')
import FloatingText from "./FloatingText";

const DiamondLogo = () => {
    const [ dimension, setDimension ] = useState(null)
  
    const handleLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setDimension({ width, height });
    };  
    
    const logoHeight = dimension !== null?dimension.height * 0.84:0
    const logoWidth = 0.94 * logoHeight    

    const logoFigmaWidth = 274
    const logoFigmaHeight = 290
    const horizontalPosScale = dimension !== null? logoWidth/logoFigmaWidth:0
    const textTopScale = dimension !== null? logoHeight/logoFigmaHeight:0
    
    return (
        <View style={styles.diamond} onLayout={handleLayout}>
            {
            dimension !== null &&
                <View style={{
                    width:logoWidth, height: logoHeight, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'visible'}}>
                <Image source={mainLogo} style={{ width: logoWidth, height: logoHeight }}/>
                <FloatingText
                    label={'WA businesses feel confident about future growth'}
                    left={horizontalPosScale * -24} top={textTopScale * 17}
                />
                <FloatingText
                    label={'AI cant replace creativity'}
                    left={horizontalPosScale * 165} top={textTopScale * 58}
                />
                <FloatingText
                    label={'Sales measure true success'}
                    left={horizontalPosScale * -24} top={textTopScale * 119}
                />
                <FloatingText
                    label={'Human connection drives WA business'}
                    left={horizontalPosScale * 84} top={textTopScale * 183}
                />
                <FloatingText
                    label={`The primary barrier to digital ${"\n"}transformation is financial investment`}
                    left={horizontalPosScale * -24} top={textTopScale * 246}
                    numberOfLines={2}
                />
                </View>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    diamond: {
        flex: 325,
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