import React, { useState, useRef, useLayoutEffect } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import DiamondLogo from './DiamondLogo';

const Welcome = () => {      
  
  return (    
    <>            
      <View style={styles.content}>
        <DiamondLogo />
        <View style={styles.contentText}>
          <Text style={[styles.mainText, styles.textColor]}>
            Compare your thoughts on <Text style={styles.innerTextColor}>technology</Text> with current industry opinions.
          </Text>
        </View>
      </View>
    </>    
  )
}

const styles = StyleSheet.create({ 
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },    
  contentText: {
    flex: 122,
    //backgroundColor: 'orange'
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    //paddingHorizontal: 22
  },
  mainText: {
    //fontFamily: 'Bagoss TRIAL',
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 33.6,
    //letterSpacing: '0.01em',
    textAlign: 'center'
  },
  textColor: {
    color: '#FAFAFA'
  },
  innerTextColor: {
    color: '#FABBFF' //#B179FF #6DDDFF
  },
  imageStyle: { width: 320, height: 320 }
})

export default Welcome