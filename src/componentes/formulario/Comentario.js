

export default function Comentario(props){
    const {id, deleteComp}= props;
    return(
        <fieldset className="coment" id={id}>
            <label htmlFor="coment">
                <h3 className="title">Comentarios adicionales</h3>
                <textarea name="adComents" id="coment" rows="6"></textarea>
                <button className="delete-btn">DELETE <i class="fa-regular fa-trash-can"></i></button>
            </label>
            <button className="delete-btn" data-id={id} onClick={deleteComp}>DELETE <i class="fa-regular fa-trash-can"></i></button>
        </fieldset>
    )
}