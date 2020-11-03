import styles from './Loader.module.css'

export const Loader = () => {

    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <span></span>
            </div>
        </div>
    )
}