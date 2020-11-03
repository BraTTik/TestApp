import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';
import { useAppState, Actions } from '../../context/AppStateContext';

const PriceAndDurationSorter = () => {
    const { dispatch } = useAppState();
    const handleChange = (e) => {
        const sorter = e.target.dataset.sorter;
        const option = e.target.dataset.option;
        dispatch({type: Actions.CLEAR_SEARCH});
        dispatch({type: Actions.SET_SORT, payload: {sorter, option}})
    }
    return (
        <PanelSection title="Сортировать">
            <InputForm onChange={handleChange} type="radio" id="lower" name="sorter" data-sorter="price" data-option="lower" label="по возрастнию цены"/>
            <InputForm onChange={handleChange} type="radio" id="higher" name="sorter" data-sorter="price" data-option="higher" label="по убыванию цены"/>
            <InputForm onChange={handleChange} type="radio" id="time" name="sorter" data-sorter="time" data-option="lower" label="по длительности"/>
        </PanelSection>
    )
}

export default PriceAndDurationSorter;