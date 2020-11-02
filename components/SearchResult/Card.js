import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import styles from './CardStyles.module.css';

export const Card = ( {data} ) => {
    //console.log(data);
    const { carrier, price, legs } = data;
    return (
        <div className={styles.card}>
            <CardHeader title={carrier.caption} price={price.total.amount} id={carrier.uid}/>
            <CardBody legs={legs}/>
        </div>
    )
}