import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { PlatformPressable } from '@react-navigation/elements';
import { navIcons } from '../assets/navIcons';
import { DoubleA, Reload } from "./Icons"

function TabBar({ state, descriptors, navigation }) {    
    const [ active, setActive ] = useState(2)    
    const linkTo = "juicebox.com.au"    

    return (
        <View style={styles.tabBar}>
            <View style={styles.inputContainer}>
                <View style={styles.inputWithIcon}>
                    <DoubleA />
                    <TextInput style={styles.textInput} value={linkTo} />
                    <Reload />
                </View>
            </View>
            <View style={styles.tabNav}>
                { [1, 2, 3, 4, 5].map((icon, index) => {            

                    const isFocused = icon === active;

                    const onPress = () => {            
                        setActive(icon)
                    };

                    const onLongPress = () => {                
                        setActive(icon)
                    };
                    
                    return (
                        <PlatformPressable
                            key={icon}
                            href={"#"}                    
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabItem}
                        >
                            {navIcons[icon]({active: isFocused})}                    
                        </PlatformPressable>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute', 
        bottom: 0,        
        backgroundColor: '#3D3D3D',
        width: '100%',
        height: 140
    },
    inputContainer: {
        width: "100%",
        paddingLeft: 30,
        paddingRight: 30,
        display: "flex",         
        justifyContent: "center", 
        alignItems: "center",        
        height: 44
    },
    inputWithIcon:{
        width: "100%",
        marginTop: 8,
        display: "flex",
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 12,
        overflow: "hidden",
        paddingLeft: 26.2,
        paddingRight: 23.32
    }, 
    textInput: {
        width: "100%",
        height: 44,
        borderRadius: 12,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19.09,
        //letterSpacing: "-0.028em",
        textAlign: "center",
        color: "#FAFAFA"           
    }, 
    tabNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16.69,
        paddingBottom: 46.49,
        width: '100%'
    },
    tabItem: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default TabBar