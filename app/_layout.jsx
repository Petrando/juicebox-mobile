import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

const _layout = () => {
    return (
        <Tabs
            tabBar={(props)=><TabBar {...props} />}            
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home"
                }}
            />            
        </Tabs>
    )
}

export default _layout