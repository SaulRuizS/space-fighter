import { useState } from "react";

const useContextProps = () => {

    const [ playerXPos, setPlayerXPos ] = useState(45);

    const [ shootState, setShootState ] = useState(false);

    const [ asteroidXPos, setAsteroidXPos ] = useState(90);

    return {
        playerXPos,
        setPlayerXPos,

        shootState,
        setShootState,

        asteroidXPos,
        setAsteroidXPos,
    }
}
export default useContextProps;