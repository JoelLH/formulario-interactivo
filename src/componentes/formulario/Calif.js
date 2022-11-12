

export default function Calificacion(props){

    const {rate, handleRate, id, deleteComp} = props

    return(
        <fieldset class="field-sm radios" id={id}>
            <h3 class="title">Calificacion</h3>
            <div class="container-flex-around">
                <label htmlFor="radio1" id="rate1" onClick={handleRate}>
                    {rate === 1 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
                    <input type="radio" name="rate-radios" id="radio1" value="1"/>
                </label>
                <label htmlFor="radio2" id="rate2" onClick={handleRate}>
                    {rate === 2 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
                    <input type="radio" name="rate-radios" id="radio2" value="2"/>
                </label>
                <label htmlFor="radio3" id="rate3" onClick={handleRate}>
                    {rate === 3 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
                    <input type="radio" name="rate-radios" id="radio3" value="3"/>
                </label>
                <label htmlFor="radio4" id="rate4" onClick={handleRate}>
                    {rate === 4 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
                    <input type="radio" name="rate-radios" id="radio4" value="4"/>
                </label>
                <label htmlFor="radio5" id="rate5" onClick={handleRate}>
                    {rate === 5 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
                    <input type="radio" name="rate-radios" id="radio5" value="5"/>
                </label>
            </div>
            <button className="delete-btn" data-id={id} onClick={deleteComp}>DELETE <i class="fa-regular fa-trash-can"></i></button>
        </fieldset>
    )
}