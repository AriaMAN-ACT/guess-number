import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, ScrollView, FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import GuessItem from "../components/GuessItem";

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const GameScreen = ({userNumber, onGameOver}) => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);

    const [guess, setGuess] = useState(generateRandomNumber(min, max));

    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        if (userNumber === guess) {
            onGameOver(guesses.length);
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
        setGuesses(guesses => [guess.toString(), ...guesses]);
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
        setGuesses(guesses => [guess.toString(), ...guesses]);
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.container}>
                <Text style={styles.title}>Guess</Text>
                <NumberContainer>{guess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <MainButton onPress={onHigherPress}>
                        <AntDesign name="caretup" size={24} color="#FCF7F8"/>
                    </MainButton>
                    <MainButton onPress={onLowerPress}>
                        <AntDesign name="caretdown" size={24} color="#FCF7F8"/>
                    </MainButton>
                </View>
            </Card>
            <Text style={styles.smallTitle}>Past Guesses</Text>
            <FlatList data={guesses} renderItem={GuessItem.bind(this, userNumber)} keyExtractor={item => item}/>
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
    },
    guessList: {
        width: '100%'
    },
    guessListContainer: {
        alignItems: 'center'
    },
    smallTitle: {
        color: '#FCF7F8',
        fontFamily: 'roboto-mono-bold',
        fontSize: 18,
        margin: 10
    }
});

export default GameScreen;