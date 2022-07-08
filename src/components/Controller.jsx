import React, { useContext } from 'react';
import GameContext from '@context/GameContext';
import '@styles/Controllers.scss';

const Controller = () => {

    const {
        playerXPos,
        setPlayerXPos,
        shootState,
        setShootState,
    } = useContext(GameContext)

    const speed = 10;

    const moveToLeft = () => {
        let leftPos = playerXPos - speed;
        setPlayerXPos(leftPos);
        console.log(playerXPos);
    }

    const moveToRight = () => {
        let rightPos = playerXPos + speed;
        setPlayerXPos(rightPos);
        console.log(playerXPos);
    }

    const shoot = () => {
        setShootState(true);
        console.log(shootState);
        setTimeout(
            () => {
                setShootState(false);
                console.log(shootState);
            }, 500
        )
    }

    return (
        <div className='controllers'>
            <button
                className='controllers__button left'
                onClick={moveToLeft}
            > /- </button>
            <button
                className='controllers__button shoot'
                onClick={shoot}
            > * </button>
            <button
                className='controllers__button right'
                onClick={moveToRight}
            > -\ </button>
        </div>
    );
};

export default Controller;