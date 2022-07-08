import React from 'react';
import GameContext from './context/GameContext';
import MovingBG from './components/MovingBG';
import GameStarted from './sections/GameStarted';
import MainMenu from './sections/MainMenu';
import './styles/global.scss'
import useContextProps from './hooks/useContextProps';

const App = () => {

    const contextProps = useContextProps();

    return (
        <GameContext.Provider value={contextProps}>
            {/* <MainMenu /> */}
            <GameStarted />
            <MovingBG />
        </GameContext.Provider>
    );
};

export default App;