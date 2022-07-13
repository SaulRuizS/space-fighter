import { useState } from "react";

const useContextProps = () => {

    const [ playerXPos, setPlayerXPos ] = useState(45);

    const [ playerMovingLeft, setPlayerMovingLeft ] = useState(false);

    const [ playerMovingRight, setPlayerMovingRight ] = useState(false);

    const [ shootState, setShootState ] = useState(false);

    return {
        playerXPos,
        setPlayerXPos,

        playerMovingLeft,
        setPlayerMovingLeft,

        playerMovingRight,
        setPlayerMovingRight,

        shootState,
        setShootState,
    }
}
export default useContextProps;