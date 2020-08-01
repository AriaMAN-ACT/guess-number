import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const GameScreen = ({userNumber, onGameOver}) => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);

    const [guess, setGuess] = useState(generateRandomNumber(min, max));

    const [rounds, setRounds] = useState(0);

    useEffect(() => {
        if (userNumber === guess) {
            onGameOver(rounds);
        }
    });

    const onHigherPress = () => {
        if (guess + 1 > userNumber) {
            Alert.alert('Do Not Cheat!', 'The guess number is lower but you have pressed the higher button.', [{
                text: 'Continue',
                style: 'destructive'
            }]);
            return;
        }
        setMin(guess + 1);
        setGuess(generateRandomNumber(guess + 1, max));
        setRounds(r => r + 1);
    };

    const onLowerPress = () => {
        if (guess - 1 < userNumber) {
            Alert.alert('Do Not Cheat!', 'The guess number is higher but you have pressed the lower button.', [{
                text: 'Continue',
                style: 'destructive'
            }]);
            return;
        }
        setMax(guess);
        setGuess(generateRandomNumber(min, guess));
        setRounds(r => r + 1);
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.title}>Guess</Text>
                <NumberContainer>{guess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={onHigherPress}>
                        <AntDesign name="caretup" size={24} color="#FCF7F8" />
                    </MainButton>
                    <MainButton onPress={onLowerPress}>
                        <AntDesign name="caretdown" size={24} color="#FCF7F8" />
                    </MainButton>
                </View>
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
        fontFamily: 'roboto-mono-bold'
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
        width: '80%',
        marginTop: 10
    }
});

export default GameScreen;