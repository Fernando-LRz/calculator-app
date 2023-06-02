import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color?: string;
    wider?: boolean;
    action: ( value: string ) => void;
}

const Button = ({ text, color = '#2D2D2D', wider = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action(text) }
        >            
            <View>
                <View style={{ 
                    ...styles.button,
                    backgroundColor: color,
                    width: ( wider ) ? 180 : 80
                }}>
                    <Text style={{
                        ...styles.buttonText,
                        color: ( color === '#9B9B9B' ) ? 'black' : 'white'
                    }}>{ text }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80, 
        marginHorizontal: 10,
        borderRadius: 100,
        justifyContent: 'center'
    },
    buttonText: {
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Button