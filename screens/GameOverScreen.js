import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const GameOverScreen = ({rounds, userNumber, onPlayAgainPress}) => {
    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.text}>Game Over In {rounds} Rounds!</Text>
                <Text style={styles.text}>The Number Was:</Text>
                <NumberContainer>{userNumber}</NumberContainer>
                <Button title="Play Again" onPress={onPlayAgainPress}/>
            </Card>
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
    },
    container: {
        alignItems: 'center',
        width: 300,
        maxWidth: '80%'
    },
    text: {
        color: '#FCF7F8',
        marginTop: 10,
        fontSize: 16
    }
});

export default GameOverScreen;