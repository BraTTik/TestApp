
export const InputForm = ( {id = '', name = '', label = '', className = '', ...inputParams} ) => {

    return (
        <div className={className}>
            <input id={id} name={name} {...inputParams}/> 
            { label && ' - ' }
            <label htmlFor={id} style={{cursor: 'pointer'}}>{label}</label>
        </div>
    )
}