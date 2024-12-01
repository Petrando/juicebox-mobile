import React, { useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, PanResponder } from 'react-native'
const dataInputLogo = require('../../../../assets/images/dataInputLogo.png')
import { ArrowTop } from '../../../Icons'
import { styles as homeStyles } from '../styles'

const DataInput = ({ name, setName, email, setEmail }) => {
    const nameLabel = 'Let’s start with the basics. Type in your first name.'
    const emailLabel = 'How should we contact you? Type in your email address.'
    const completedLabel1 = 'Thanks, <Name>! Now, it’s time to get a reality check. '
    const completedLabel2 = 'This will take 2-3 minutes. '
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={dataInputLogo} style={{ width: 29, height: 30.79 }} />
                <Text style={styles.text}>
                    {nameLabel}
                </Text>
            </View>
            <View style={{padding: 20}}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder={
                        name === ""?"First name":
                            email === ""?"Set email":""
                    }
                />
                <TouchableOpacity style={styles.arrowButton}>
                    <ArrowTop />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'        
    },
    content:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 24
    },
    text: {
        //fontFamily: Bagoss TRIAL,
        fontSize: 19,
        fontWeight: 400,
        lineHeight: 22.8,
        //letter-spacing: 0.01em,
        textAlign: 'center',
        color: '#FAFAFA',
        marginTop: 32
    },
    inputContainer: {
        //marginTop: 20,
        width: 350,
        height: 60,
        //padding: 0px 12px 0px 12px;
        borderRadius: 18,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.6)'
    },
    input: {
        flex: 1,
        placeholderTextColor: '#3D3D3D',
        paddingHorizontal: 12
    },
    arrowButton: {
        width: 31,
        height: 31,
        borderRadius: 27,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        position: 'absolute', right: 14.5, top: 14.5
    }
})

export default DataInput
