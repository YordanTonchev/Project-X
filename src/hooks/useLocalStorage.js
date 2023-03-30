import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);
        if (persistedStateSerialized){
            const persitedState = JSON.parse(persistedStateSerialized);

            return persitedState;
        }

        return initialValue;
    });

   

    const setLoclaStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return[
        state,
        setLoclaStorageState,
    ];
};