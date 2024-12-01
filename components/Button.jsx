import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Welcome from './pages/home/welcome/Welcome';

const Button = ({ homeState, setHomeState }) => {
    const atSwipe = homeState.startsWith("swipe")
    const atDataInput = homeState.startsWith("data-input")
    const buttonLabel = homeState === "welcome"?"Get a reality check":
        homeState === "swipe3"?"Continue":"Get started"

    const buttonStyle = homeState === "welcome"?styles.welcomeButton:
        (homeState === "swipe3" || atDataInput)?styles.whiteButton:
            styles.darkButton

    const buttonTextStyle = homeState === "welcome"?styles.welcomeText:
        (homeState === "swipe3" || atDataInput)?styles.whiteButtonText:
            styles.darkButtonText
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, buttonStyle]} 
                onPress={()=>{
                    if(homeState === "welcome"){
                      setHomeState("swipe1")
                    }else if(atSwipe){                    
                      setHomeState("data-input-name")
                    }        
                  }}>
                <Text style={[styles.text, buttonTextStyle]}>{buttonLabel}</Text>
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
        
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    text: {
        //fontFamily: 'Sohne',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 21.6,
        letterSpacing: 0.02,
        textAlign: 'center',        
    },
    welcomeButton: {
        backgroundColor: '#CDAAFF',
    },
    welcomeText: {
        color: '#0C0D10'
    },
    darkButton:{
        backgroundColor: '#0C0D10',
        borderColor: '#FAFAFA', borderWidth: 1, borderStyle: 'solid'
    },
    darkButtonText: {
        color: '#FAFAFA'
    },
    whiteButton: {
        backgroundColor: '#FAFAFA'
    },
    whiteButtonText: {
        color: '#0C0D10'
    }
})

export default Button

