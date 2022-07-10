import React, { useRef } from 'react';
import Controller from '@components/Controller';
import Player from '@components/Player';
import PlayerInfo from '@components/PlayerInfo';
import '@styles/GameStarted.scss';

const GameStarted = () => {

    const gameStarted = useRef(null);
    // const gameStartedStyle = getComputedStyle(gameStarted.current);

    return (
        <div ref={gameStarted} className='game-started'>
            {console.log(gameStarted.current)}
            <PlayerInfo />
            <Player />
            <Controller />
        </div>
    );
};

export default GameStarted;