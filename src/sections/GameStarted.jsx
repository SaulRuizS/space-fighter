import React, { useEffect, useState } from 'react';
import Controller from '@components/Controller';
import Player from '@components/Player';
import PlayerInfo from '@components/PlayerInfo';
import Asteroid from '@components/Asteroid';
import '@styles/GameStarted.scss';

const GameStarted = () => {

    let count = 0;

    const [ asteroidsCount, setAsteroidsCount ] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(
            () => {
                count++;
                setAsteroidsCount(count);
                console.log(asteroidsCount);
            },
            1500
        )
        return () => clearInterval(intervalID);
    }, [])

    return (
        <div className='game-started'>
            <PlayerInfo />
            <Asteroid asteroidsCount={asteroidsCount}/>
            <Player />
            <Controller />
        </div>
    );
};

export default GameStarted;