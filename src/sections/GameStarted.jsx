import React, { useEffect } from 'react';
import Controller from '@components/Controller';
import Player from '@components/Player';
import PlayerInfo from '@components/PlayerInfo';
import Asteroid from '@components/Asteroid';
import '@styles/GameStarted.scss';

const GameStarted = () => {

    let asteroidState = true;

    const addAsteroid = () => {
        setInterval(() => {
            asteroidState = !asteroidState;
            // console.log(asteroidState);
        }, 2000)
    }

    useEffect(addAsteroid, []);

    return (
        <div className='game-started'>
            <PlayerInfo />
            <Player />
            {asteroidState && <Asteroid />}
            {/* <Asteroid /> */}
            <Controller />
        </div>
    );
};

export default GameStarted;