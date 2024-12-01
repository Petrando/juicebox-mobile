import React, { useState, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMediaQuery } from 'react-responsive'
import TopNav from '../components/pages/home/TopNav';
import Button from '../components/pages/home/Button';
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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  console.log('isDesktopOrLaptop : ', isDesktopOrLaptop)
  console.log('isBigScreen : ', isBigScreen)
  console.log('isTabletOrMobile : ', isTabletOrMobile)
  console.log('isPortrait : ', isPortrait)
  console.log('isRetina : ', isRetina)

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