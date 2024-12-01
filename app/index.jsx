import React, { useState, useRef, useLayoutEffect } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNav from '../components/pages/home/TopNav';
import Button from '../components/Button';
import { RadialGradient } from '../components/Icons';
const MainLogo = require('../assets/images/MainLogo.png')
//const LogoImage = Image.resolveAssetSource(MainLogo).uri;

const Home = () => {
  const homeRef = useRef(null)
  const [ dimension, setDimension ] = useState(null)

  /*useLayoutEffect(()=>{
    const { width, height }=  homeRef.current?.getBoundingClientRect()
    
    setDimension({width, height})
  }, [])*/

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimension({ width, height });
  };
  
  return (    
    <SafeAreaView style={styles.container} onLayout={handleLayout} ref={homeRef}>
      
      { dimension !== null && <RadialGradient {...dimension} /> }
      <TopNav />
      <View style={styles.content}>
        <View style={styles.diamond}>
          <Image source={MainLogo} />
        </View>
        <View style={styles.contentText}>
          <Text style={[styles.mainText, styles.textColor]}>
            Compare your thoughts on <Text style={styles.innerText}>technology</Text> with current industry opinions.
          </Text>
        </View>
      </View>
      <Button />
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  container :{
    display:"flex",
    flexDirection: 'column',      
    flex: 1,
    marginBottom: 140,
    justifySelf: 'end',
    position: 'relative'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  diamond: {
    flex: 346,
    //backgroundColor: 'red',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  innerText: {
    color: '#FABBFF' //#B179FF #6DDDFF
  },
  imageStyle: { width: 320, height: 320 }
})

export default Home