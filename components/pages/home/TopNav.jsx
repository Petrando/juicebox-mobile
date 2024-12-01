import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { BackArrowTop, JuiceboxTitle, ReloadTop } from '../../Icons'

const TopNav = ({ homeState, setHomeState }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>{
                    if(homeState.startsWith("swipe")){
                        setHomeState("welcome")
                    }else if(homeState === "data-input"){
                        setHomeState("swipe3")
                    }
                }}
                style={[styles.button, homeState === "welcome" && styles.disableButton]}
            >
                <BackArrowTop />
            </TouchableOpacity>
            <JuiceboxTitle />
            <TouchableOpacity style={styles.button}>
                <ReloadTop />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
        
    },
    button: {
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: 46, height: 46
    },
    disableButton: {
        opacity: 0,
        pointerEvents: 'none'
    }
})

export default TopNav