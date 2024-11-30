import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

const _layout = () => {
    return (
        <Tabs
            tabBar={(props)=><TabBar {...props} />}
            screenOptions={{
                headerShown: false
            }}            
        >
            <Tabs.Screen
                name="index"
            />            
        </Tabs>
    )
}

export default _layout