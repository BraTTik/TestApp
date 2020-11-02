import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';

const PriceAndDurationSorter = () => {
    const handleChange = (e) => {
        console.log(e.target.dataset.sorter);
        console.log(e.target.dataset.option )
    }
    return (
        <PanelSection title="Сортировать">
            <InputForm onChange={handleChange} type="radio" id="lower" name="sorter" data-sorter="price" data-option="lower" label="по возрастнию цены"/>
            <InputForm onChange={handleChange} type="radio" id="higher" name="sorter" data-sorter="price" data-option="higher" label="по убыванию цены"/>
            <InputForm onChange={handleChange} type="radio" id="time" name="sorter" data-sorter="time" label="по убыванию цены"/>
        </PanelSection>
    )
}

export default PriceAndDurationSorter;