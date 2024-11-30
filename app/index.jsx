import React, { useState, useRef, useLayoutEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadialGradient } from '../components/Icons';

const Home = () => {
  const homeRef = useRef(null)
  const [ dimension, setDimension ] = useState(null)
  useLayoutEffect(()=>{
    const { width, height }=  homeRef.current.getBoundingClientRect()

    console.log(width, height)
    setDimension({width, height})
  }, [])
  
  return (    
    <SafeAreaView style={styles.container} ref={homeRef}>
      <View style={styles.content}>
        { dimension !== null && <RadialGradient {...dimension} /> }
      </View>
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  container :{
    display:"flex",      
    flex: 1,
    marginBottom: 140, 
    //backgroundColor: "#0C0D10"
  },
  content: {
    flex: 1,
    position: "relative",
  },
  imageStyle: { width: 320, height: 320 }
})

export default Home