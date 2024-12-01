import React, { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import TabBar from '../components/TabBar';

SplashScreen.preventAutoHideAsync();

const _layout = () => {
    const [loaded, error] = useFonts({
        'Bagoss': require('../assets/fonts/BagossTRIALVF.ttf'),
        //'Sohne': require('../assets/fonts/TestSohneBreit-Buch.otf'),
        //'SF Pro': require('../assets/fonts/SFPRODISPLAYREGULAR.OTF')
    });

    useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    
    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaProvider>
        <Tabs
            tabBar={(props)=><TabBar {...props} />}
            screenOptions={{
                headerShown: false
            }}            
        >
            <Tabs.Screen
                name='index'
            />            
        </Tabs>
        </SafeAreaProvider>
    )
}

export default _layout