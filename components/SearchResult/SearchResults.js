import { Card } from './Card';
import styles from './CardStyles.module.css';

export const SearchResults = ( {result} ) => {
    
    return (
        <div className={styles.container}>
            {result && result.map( ({flight}) => {
                            return (
                                <Card data={flight} />
                            )
            })}
        </div>
    )
}