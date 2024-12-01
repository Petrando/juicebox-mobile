import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, PanResponder } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
const swipeLogo = require('../../../../assets/images/SwipeLogo.png')
import SwipeButtons from './SwipeButtons'
import { styles as homeStyles } from '../styles'

const Swipe = ({homeState, setHomeState}) => {
    const [ dimension, setDimension ] = useState(null)
    const swipeIdx = parseInt(homeState.charAt(5))
  
    const handleLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setDimension({ width, height });
    };

    const logoHeight = dimension !== null?dimension.height * 0.62:0
    const logoWidth = 0.94 * logoHeight

    const texts = [
        [
            'Professionals around the world shared how they feel abo',
            'ut technology and I’ve listened. Now it’s your turn.'
        ],
        [
            'I’ll ask you a handful of meaningful questions ',
            'and compare your responses with people in your industry. '
        ],
        [
            'You’ll get insights into current industry sentiments an',
            'd a reality check about technology in a few minutes. Deal? Great!'
        ]
    ]
   
    return(
        <GestureRecognizer           
            onSwipeLeft={() => {
                if( swipeIdx < 3 ){ setHomeState("swipe" + (swipeIdx + 1)) }
            }}
            onSwipeRight={() => {
                if( swipeIdx > 1 ){ setHomeState("swipe" + (swipeIdx - 1)) }
            }}
            config={{
                velocityThreshold: 0.1,
                directionalOffsetThreshold: 40
              }} 
            style={homeStyles.content} onLayout={handleLayout}           
        >
        
            <View style={styles.diamondContainer}>
                {
                    dimension !== null &&
                        <Image source={swipeLogo} style={{ width: 0.6 * logoWidth, height: 0.6 * logoHeight }} />
                }
            
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, styles.textColor]}>
                    { texts[swipeIdx - 1][0] }
                    <Text style={styles.innerTextColor}>
                    { texts[swipeIdx - 1][1]}
                    </Text>
                </Text>

                <SwipeButtons swipeIdx={swipeIdx} />
            </View>
        
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({    
    diamondContainer: {
        flex: 251,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    textContainer: {
        flex: 220,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    text: {
        //fontFamily: Bagoss TRIAL,
        fontSize: 22,
        fontWeight: 400,
        lineHeight: 27.5,
        //letterSpacing: 0.01em;
        textAlign: 'center'            
    },
    textColor: {
        color: '#FAFAFA'
    },
    innerTextColor: {
        color: '#3D3D3D' //#B179FF #6DDDFF
    }
})

export default Swipe