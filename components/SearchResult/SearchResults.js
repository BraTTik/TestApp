import { Card } from './Card';
import styles from './CardStyles.module.css';
import {useAppState, Actions } from '../../context/AppStateContext';
import { Loader } from '../Loader';

export const SearchResults = ( {result, noData, isLoading} ) => {
    const { state, dispatch } = useAppState();
    const showNext = () => {
        dispatch({type: Actions.ADD_PARAMS, payload: { chunk: 1}})
        dispatch({type: Actions.ADD_FLIGHTS, payload: result});
    }

    if(state.flights.length === 0 && result.length === 0){
        return <div className={styles.container}>
                    <p>По Вашим запросам ничего не найдено.</p>
                    <p>Пoпробуйте изменить настройки фильтра.</p>
                </div> 
    }
    
    return (
        <div className={styles.container}>

            {state.flights.length ? state.flights.map( ({flight, flightToken}, i) => {
                            return (
                                <Card key={Math.random()+i} data={flight} flightToken={flightToken}/>
                            )
            }) : ''}
            {result && result.map( ({flight, flightToken}, i) => {
                            return (
                                <Card key={Math.random()+i} data={flight} flightToken={flightToken}/>
                            )
            })}
            {!noData && <div style={{textAlign: 'center'}}>
                            <button onClick={showNext} className={styles.cardButton}>
                                Показать ещё
                            </button>
                        </div>
            }
        </div>
    )
}