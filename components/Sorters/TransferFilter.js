import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';

const TransferFilter = () => {

    const handleChange = ( e ) => {
        // todo
        console.log(e.target.id);
    }

    return (
        <PanelSection title="Фильтровать">
            <InputForm 
                type="checkbox" 
                id="no-transfer" 
                name="no-transfer" 
                label="Без пересадок"
                onChange={handleChange}
            />
            <InputForm 
                type="checkbox" 
                id="transfer" 
                name="transfer" 
                label="1 пересадка"
                onChange={handleChange}
            />
        </PanelSection>
    )
}

export default TransferFilter;