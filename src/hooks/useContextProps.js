import { useState } from "react";

const useContextProps = () => {

    const [ playerXPos, setPlayerXPos ] = useState(50);

    const [ shootState, setShootState ] = useState(false);

    return {
        playerXPos,
        setPlayerXPos,

        shootState,
        setShootState,
    }
}
export default useContextProps;