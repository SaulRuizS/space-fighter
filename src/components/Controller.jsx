import React, { useContext, useState } from 'react';
import GameContext from '@context/GameContext';
import '@styles/Controllers.scss';

const Controller = () => {

    const {
        playerXPos,
        setPlayerXPos,

        playerMovingLeft,
        setPlayerMovingLeft,

        playerMovingRight,
        setPlayerMovingRight,

        shootState,
        setShootState,
    } = useContext(GameContext)

    const speed = 5;

    const moveToLeft = () => {
        let leftPos = playerXPos;

        if(leftPos > 0) {
            leftPos -= speed;
            setPlayerXPos(leftPos);
        }
    }

    const stopMoveLeft = () => {
        if(playerMovingLeft) {
            setPlayerMovingLeft(false);
        }
    }

    const moveToRight = () => {
        let rightPos = playerXPos;

        if(rightPos < 90) {
            rightPos += speed;
            setPlayerXPos(rightPos);
        }
    }

    const stopMoveRight = () => {
        if(playerMovingRight) {
            setPlayerMovingRight(false);
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
                onMouseDown={(e) => {
                    if(e) {
                        moveToLeft();
                    }
                    console.log(e);
                }}
                onMouseUp={(e) => {
                    console.log(e);
                }}
            > /- </button>
            <button
                className='controllers__button shoot'
                onClick={shoot}
            > * </button>
            <button
                className='controllers__button right'
                onMouseDown={(e) => {
                    if(e) {
                        moveToRight();
                    }
                    console.log(e);
                }}
                onMouseUp={(e) => {
                    console.log(e);
                }}
            > -\ </button>
        </div>
    );
};

export default Controller;