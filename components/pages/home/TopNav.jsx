import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { BackArrowTop, JuiceboxTitle, ReloadTop } from '../../Icons'

const TopNav = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
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
    }
})

export default TopNav