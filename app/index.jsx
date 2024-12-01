import React, { useState, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNav from '../components/pages/home/TopNav';
import Button from '../components/Button';
import Welcome from '../components/pages/home/welcome/Welcome';
import Swipe from '../components/pages/home/swipe/Swipe';
import { RadialGradient } from '../components/Icons';

const Home = () => {
  const [homeState, setHomeState] = useState("welcome")
  const homeRef = useRef(null)
  const [ dimension, setDimension ] = useState(null)  

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimension({ width, height });
  };
  
  return (    
    <SafeAreaView style={styles.container} onLayout={handleLayout} ref={homeRef}>      
      { dimension !== null && <RadialGradient {...dimension} /> }
      <TopNav />
      {
        homeState === "welcome"?
          <Welcome /> : homeState.startsWith("swipe")?
            <Swipe homeState={homeState} setHomeState={setHomeState} />:<></>
      }
      <Button onClick={()=>{
        if(homeState === "welcome"){
          setHomeState("swipe1")
        }else if(homeState.startsWith("swipe")){
          //setHomeState("data-input")
        }
        
      }} 
      />
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    display:"flex",
    flexDirection: 'column',          
    marginBottom: 140,
    justifySelf: 'end',
    position: 'relative'
  },
  
})

export default Home