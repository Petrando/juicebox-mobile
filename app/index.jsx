import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { RadialGradient } from '../components/Icons'

const Home = () => {
  return (    
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  container :{
    display:"flex",      
    flex: 1,
    marginBottom: 140, 
    backgroundColor: "#0C0D10"
  },
  content: {
    flex: 1,
    position: "relative",
    border: "3px solid orange"
  }
})

export default Home