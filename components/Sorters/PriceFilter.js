import { InputForm } from './InputForm';
import PanelSection from '../Panel/PanelSection';

const TransferFilter = () => {

    const handleChange = ( e ) => {
        // todo
        console.log(e.target.id);
    }

    return (
        <PanelSection title="Фильтровать">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>От &nbsp;</span>
                <InputForm 
                    type="text" 
                    id="price-from" 
                    name="price-from" 
                    onChange={handleChange}
                    placeholder="0"
                />
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>До &nbsp;</span>
                <InputForm 
                    type="text" 
                    id="price-to" 
                    name="price-to" 
                    onChange={handleChange}
                    placeholder="10000"
                />
            </div>
        </PanelSection>
    )
}

export default TransferFilter;