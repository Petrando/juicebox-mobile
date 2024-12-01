import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const SwipeButtons = ({swipeIdx}) => {
    return (
        <View style={styles.container}>
            <View style={styles.swipes}>
            {
                [1, 2, 3].map((d) => {
                    const active = swipeIdx === d
                    return (
                        <TouchableOpacity 
                            key={d} 
                            style={[styles.swipe, active?styles.swipeActive:styles.swipeBackground]}>

                        </TouchableOpacity>
                    )
                })
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 8,
        display: 'flex', justifyContent: 'center', alignItems: 'center',        
    },
    swipes: {
        width: 40,
        height: 8,
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    swipe: {
        width: 8, height: 8,
        borderRadius: 4
    },
    swipeBackground: {
        backgroundColor: '#3D3D3D'
    },
    swipeActive: {
        backgroundColor: '#B488F2'
    }
})

export default SwipeButtons