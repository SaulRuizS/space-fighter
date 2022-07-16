import React, { useEffect } from 'react';
import Controller from '@components/Controller';
import Player from '@components/Player';
import PlayerInfo from '@components/PlayerInfo';
import Asteroid from '@components/Asteroid';
import '@styles/GameStarted.scss';

const GameStarted = () => {

    return (
        <div className='game-started'>
            <PlayerInfo />
            <Asteroid />
            <Player />
            <Controller />
        </div>
    );
};

export default GameStarted;