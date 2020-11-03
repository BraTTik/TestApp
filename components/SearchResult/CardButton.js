import styles from './CardStyles.module.css';

export const CardButton = ({ onClick }) => {

    return (
        <button className={styles.cardButton} onClick={onClick}>
            Выбрать
        </button>
    )
}