import React from 'react';
import { Text, StyleSheet } from 'react-native'

const FloatingText = ({ label, top, left}) => {
    return (
        <Text style={[styles.floatingText, {top, left}]}>
            {label}
        </Text>
    )
}

const styles = StyleSheet.create({
    floatingText: {
        //fontFamily: 'Sohne',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16.2,
        //letterSpacing: '0.02em'
        color: '#FAFAFA',
        position: 'absolute'
    }
})

export default FloatingText