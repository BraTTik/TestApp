import styles from './CardStyles.module.css';

export const CardHeader = ({title, price, id}) => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.center}>
                    <div>{title}</div>
                    <div style={{textAlign: "right"}}>
                        <div className={styles.price}>{price}₽</div>
                        <small>Стоимость для одного взрослого пассажира</small>
                    </div>
                </div>
            </div>
        </header>
    )
}