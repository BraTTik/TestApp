import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardButton } from './CardButton';
import styles from './CardStyles.module.css';

export const Card = ( {data, flightToken} ) => {
    const { carrier, price, legs } = data;

    const handleOnClick = () => {
        console.log(flightToken);
    }
    return (
        <div className={styles.card}>
            <CardHeader title={carrier.caption} price={price.total.amount} id={carrier.uid}/>
            <CardBody legs={legs}/>
            <CardButton onClick={handleOnClick}/>
        </div>
    )
}