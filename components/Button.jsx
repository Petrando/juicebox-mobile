import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Button = ({ homeState, setHomeState }) => {
    const atSwipe = homeState.startsWith("swipe")
    const buttonLabel = homeState === "welcome"?"Get a reality check":
        homeState === "swipe3"?"Continue":"Get started"

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 
                onPress={()=>{
                    if(homeState === "welcome"){
                      setHomeState("swipe1")
                    }else if(atSwipe){                    
                      setHomeState("data-input")
                    }        
                  }}>
                <Text style={styles.text}>{buttonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        paddingVertical: 22
    },
    button: {
        width: '90%',
        height: 60,
        borderRadius: 19,
        backgroundColor: '#CDAAFF',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    text: {
        //fontFamily: 'Sohne',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 21.6,
        letterSpacing: 0.02,
        textAlign: 'center',
        color: '#0C0D10'
    }
})

export default Button

