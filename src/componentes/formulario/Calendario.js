

export default function Calendario(props){
    const {id, deleteComp} = props;
    return(
        <fieldset className="field-sm" id={id}>
            <label htmlFor="calendarioIn">
                Calendario
                <input type="date" id="calendarioIn"/>
            </label>
            <button className="delete-btn" data-id={id} onClick={deleteComp}>DELETE <i class="fa-regular fa-trash-can"></i></button>    
        </fieldset>
        
    )
}