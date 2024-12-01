import React, { useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, PanResponder } from 'react-native'
const dataInputLogo = require('../../../../assets/images/dataInputLogo.png')
import { ArrowTop } from '../../../Icons'
import { styles as homeStyles } from '../styles'

const DataInput = ({ name, setName, email, setEmail, homeState, setHomeState }) => {
    const nameLabel = 'Let’s start with the basics. Type in your first name.'
    const emailLabel = 'How should we contact you? Type in your email address.'
    const completedLabel1 = `Thanks, ${name}! Now, it’s time to get a reality check. `
    const completedLabel2 = 'This will take 2-3 minutes. '

    const text1 = homeState === "data-input-name"?nameLabel:
        homeState === "data-input-email"?emailLabel:
            completedLabel1
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={dataInputLogo} style={{ width: 29, height: 30.79 }} />
                <Text style={styles.text}>
                    {text1}
                </Text>
                {
                    homeState === "data-input-completed" &&
                    <Text style={styles.text}>
                        {completedLabel2}
                    </Text>
                }
            </View>
            <View style={{padding: 20}}>
            {
                homeState !== "data-input-complete" &&
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder={
                            name === ""?"First name":
                                email === ""?"Set email":""
                        }
                        onChangeText={(e)=>{
                            if(homeState === "data-input-name"){
                                setName(e)
                            }else if(homeState === "data-input-email"){
                                setEmail(e)
                            }
                        }}
                        value={
                            homeState === "data-input-name"?name:email
                        }
                    />
                    <TouchableOpacity 
                        style={styles.arrowButton}
                        disable={
                            (homeState === "data-input-name" && name === "") ||
                                (homeState === "data-input-email" && email === "")
                        }
                        onPress={()=>{
                            if(homeState === "data-input-name" && name !== ""){
                                setHomeState("data-input-email")
                            }else if(homeState === "data-input-email" && email !== ""){
                                setHomeState("data-input-complete")
                            }
                        }}
                    
                    >
                        <ArrowTop />
                    </TouchableOpacity>
                </View>
            }
            
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
        width: "100%",
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
        paddingHorizontal: 12,
        color: '#FAFAFA'
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
