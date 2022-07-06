import React from 'react';
import '../styles/PlayerInfo.scss';

const PlayerInfo = () => {
    return (
        <div className='player-info'>
            <h2 className='player-info__score'>Score: <span>0</span></h2>
            <h2 className='player-info__lifes'>Lifes: <span>0</span></h2>
        </div>
    );
};

export default PlayerInfo;