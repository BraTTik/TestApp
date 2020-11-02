import styles from './styles.module.css';

const PanelSection = ({title, children}) => {
    return (
        <div className={styles.section}>
            <h3>{ title }</h3>
            <div>
                { children }
            </div>
        </div>
    )
}

export default PanelSection;