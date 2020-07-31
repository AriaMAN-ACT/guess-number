import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const GameScreen = ({userNumber}) => {
    const [guess, setGuess] = useState(generateRandomNumber(1, 100));

    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.title}>Guess</Text>
                <NumberContainer>{guess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <Button title="Higher"/>
                    <Button title="Lower"/>
                </Card>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#222222'
    },
    title: {
        fontSize: 24,
        color: '#1AC8ED',
    },
    container: {
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    }
});

export default GameScreen;