import styles from './CardStyles.module.css';
import { CardSegment } from './CardSegment';

export const CardBody = ( {legs} ) => {
    
    return(
        <div>
            <CardSegment  {...legs[0]}/>
        </div>
    )
}