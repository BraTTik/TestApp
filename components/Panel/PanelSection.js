import styles from './styles.module.css';

const PanelSection = ({title, children, ...params}) => {
    return (
        <div className={styles.section} {...params}>
            <h3>{ title }</h3>
            <div>
                { children }
            </div>
        </div>
    )
}

export default PanelSection;