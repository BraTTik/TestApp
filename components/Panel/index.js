import styles from './styles.module.css';

const Panel = ( { children }) => {

    return (
        <aside className={styles.panel}>
            { children }
        </aside>
    )
}

export default Panel;