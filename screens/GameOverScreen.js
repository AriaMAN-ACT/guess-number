import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameOverScreen = ({rounds}) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over In {rounds} Rounds!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#222222',
        justifyContent: 'center'
    }
});

export default GameOverScreen;