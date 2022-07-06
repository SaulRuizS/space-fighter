import React from 'react';
import Controller from '../components/Controller';
import Player from '../components/Player';
import PlayerInfo from '../components/PlayerInfo';
import '../styles/GameStarted.scss';

const GameStarted = () => {
    return (
        <div className='game-started'>
            <PlayerInfo />
            <Player />
            <Controller />
        </div>
    );
};

export default GameStarted;