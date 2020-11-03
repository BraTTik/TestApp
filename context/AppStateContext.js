import { useContext, useReducer, createContext } from 'react';

const AppState = {
    flights: [],
    sort: {
        sorter: 'price',
        option: 'lower'
    },
    filters: [],
    params: {
        chunk: 2,
    },
}

export const Actions = {
    ADD_FLIGHTS: 'ADD_FLIGHTS',
    ADD_FILTER: 'ADD_FILTER',
    REMOVE_FILTER: 'REMOVE_FILTER',
    ADD_PARAMS:  'ADD_PARAMS',
    SET_SORT: 'SET_SORT',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
}

const AppStateContext = createContext();

const AppStateReducer = (state, action) => {
    switch(action.type){
        case Actions.ADD_FLIGHTS: {
            return { ...state, flights: [...state.flights, ...action.payload]}
        }
        case Actions.ADD_FILTER: {
            return {...state, filters: [...state.filters, action.payload]}
        }
        case Actions.REMOVE_FILTER: {
            const filtered = state.filters.filter( filter => filter !== action.payload);
            return {...state, filters: [...filtered]}
        }
        case Actions.ADD_PARAMS: {
            return {...state, params: {...state.params, ...action.payload}}
        }
        case Actions.CLEAR_SEARCH: {
            return {...state, flights: [], params: {...state.params, chunk: 2}}
        }
        case Actions.SET_SORT: {
            return {...state, sort: {...action.payload}}
        }
        default:
            return state;
    }
}

export const AppStateProvider = ({children}) => {
    let [state, dispatch] = useReducer(AppStateReducer, AppState);

    return (
        <AppStateContext.Provider value = { {state, dispatch}}>
            { children }
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext);
}