

export default function Contacto(props){
    const {id, deleteComp} = props
    return(
        <fieldset id={id}>
            <label htmlFor="nombres">
                Nombres:
                <input type="text" id="nombres"/>
            </label>
            <label htmlFor="apellidos">
                Apellidos:
                <input type="text" id="apellidos"/>
            </label>
            <label htmlFor="email">
                Email:
                <input type="email" id="email"/>
            </label>
            <label htmlFor="tel">
                Tel:
                <input type="tel" id="tel"/>
            </label>
            <button className="delete-btn" data-id={id} onClick={deleteComp}>DELETE <i class="fa-regular fa-trash-can"></i></button>
        </fieldset>
    )
}