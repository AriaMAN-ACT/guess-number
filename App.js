import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";

const fetchFonts = () => {
    return Font.loadAsync({
        'roboto-mono': require('./assets/fonts/RobotoMono-Regular.ttf'),
        'roboto-mono-bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
        'roboto-mono-italic': require('./assets/fonts/RobotoMono-Italic.ttf')
    });
};

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Screens from "./models/Screens";

const App = () => {
    const [isLoad, setLoad] = useState(false);

    const [confirmedNumber, setConfirmedNumber] = useState(0);

    const [screen, setScreen] = useState(Screens.startGame);

    const [rounds, setRounds] = useState(0);

    if (!isLoad)
        return (
            <AppLoading startAsync={fetchFonts} onFinish={() => setLoad(true)}/>
        );

    const onStartGamePress = (number) => {
        setConfirmedNumber(number);
        setScreen(Screens.game);
    };

    const onGameOver = (rounds) => {
        setScreen(Screens.gameOver);
        setRounds(rounds);
    };

    const onPlayAgainPress = () => {
        setScreen(Screens.startGame);
    };

    return (
        <View style={styles.screen}>
            <Header title="Guess Number"/>
            {
                screen === Screens.startGame &&
                <StartGameScreen onStartGamePress={onStartGamePress}/>
            }
            {
                screen === Screens.game &&
                <GameScreen userNumber={confirmedNumber} onGameOver={onGameOver}/>
            }
            {
                screen === Screens.gameOver &&
                <GameOverScreen rounds={rounds} userNumber={confirmedNumber} onPlayAgainPress={onPlayAgainPress}/>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default App;