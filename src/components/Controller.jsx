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

    let leftPos = playerXPos;

    let rightPos = playerXPos;

    let leftInterval = null;

    let rightInterval = null;

    const moveToLeft = () => {
        if(leftPos > 5) {
            leftPos -= speed;
            setPlayerXPos(leftPos);
        }
    }

    const moveToRight = () => {
        if(rightPos < 85) {
            rightPos += speed;
            setPlayerXPos(rightPos);
        }
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
                onMouseUp={(e) => {
                    clearInterval(leftInterval);
                    leftInterval = null;
                }}
                onMouseDown={(e) => {
                    moveToLeft();
                    leftInterval = setInterval(moveToLeft, 50);
                }}
            > /- </button>
            <button
                className='controllers__button shoot'
                onClick={shoot}
            > * </button>
            <button
                className='controllers__button right'
                onMouseUp={(e) => {
                    clearInterval(rightInterval);
                    rightInterval = null;
                }}
                onMouseDown={(e) => {
                    moveToRight();
                    rightInterval = setInterval(moveToRight, 50);
                }}
            > -\ </button>
        </div>
    );
};

export default Controller;