import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Button = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        paddingBottom: 24
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

