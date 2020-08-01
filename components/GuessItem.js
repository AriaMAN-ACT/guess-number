import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const GuessItem = (userNumber, itemData) => {
    return (
        <View style={{
            ...styles.container,
            ...(userNumber < itemData.item ? styles.higherContainer : styles.lowerContainer)
        }}>
            <Text style={styles.text}>{itemData.item}</Text>
            {
                userNumber < itemData.item ?
                    <AntDesign name="caretup" size={20} color="#FCF7F8"/> :
                    <AntDesign name="caretdown" size={20} color="#FCF7F8"/>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#FCF7F8',
        fontSize: 30,
        fontFamily: 'roboto-mono-bold'
    },
    higherContainer: {
        backgroundColor: '#2ECC71'
    },
    lowerContainer: {
        backgroundColor: '#E74C3C'
    }
});

export default GuessItem;