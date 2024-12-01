import React, { useState, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNav from '../components/pages/home/TopNav';
import Button from '../components/Button';
import Welcome from '../components/pages/home/welcome/Welcome';
import Swipe from '../components/pages/home/swipe/Swipe';
import DataInput from '../components/pages/home/data-input/DataInput';
import { RadialGradient } from '../components/Icons';

const Home = () => {
  const [homeState, setHomeState] = useState("welcome")
  const homeRef = useRef(null)
  const [ dimension, setDimension ] = useState(null)
  const [ name, setName ] = useState("")  
  const [ email, setEmail ] = useState("")

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimension({ width, height });
  };
  
  const atSwipe = homeState.startsWith("swipe")

  const hideButton = homeState === "data-input-name" || homeState === "data-input-email"
  return (    
    <SafeAreaView style={styles.container} onLayout={handleLayout} ref={homeRef}>      
      { dimension !== null && <RadialGradient {...dimension} /> }
      <TopNav homeState={homeState} setHomeState={setHomeState} />
      {
        homeState === "welcome"?
          <Welcome /> : atSwipe?
            <Swipe homeState={homeState} setHomeState={setHomeState} />:
              <DataInput 
                name={name} setName={setName}
                email={email} setEmail={setEmail}
                homeState={homeState} setHomeState={setHomeState}
              />
      }
      {
        !hideButton &&
          <Button           
            homeState={homeState} 
            setHomeState={setHomeState}
          />
      }
      
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