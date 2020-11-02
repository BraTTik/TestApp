import Panel from '../Panel';
import PriceDurationSorter from '../Sorters/PriceAndDurationSorter';
import TransferFilter from '../Sorters/TransferFilter';
import PriceFilter from '../Sorters/PriceFilter';
import CompaniesFilter from '../Sorters/CompaniesFilter';


const FilterPanel = () => {

    return (
        <Panel>
            <PriceDurationSorter />
            <TransferFilter />
            <PriceFilter />
            <CompaniesFilter />
        </Panel>
    )
}

export default FilterPanel;