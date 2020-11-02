import { useContext, useReducer, createContext } from 'react';

const AppState = {
    flights: [],
    sort: {
        sorter: 'price',
        option: 'lower'
    },
    filters: [],
    params: {},
}

const AppStateContext = createContext();

const AppStateReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppStateReducer, AppState);
    return (
        <AppStateContext.Provider value = { {state, dispatch}}>
            { children }
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext);
}