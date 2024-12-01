import React from 'react';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabBar from '../components/TabBar';

const _layout = () => {
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