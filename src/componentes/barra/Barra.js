import './styles.css';

export default function Barra (props){
    const {addComponent} = props

    return(
        <section className='compo-section'>
            <header className='compo-header'>
                <span className='barra-title'>
                    <i class="fa-solid fa-ellipsis-vertical"></i> Componentes
                </span>
            </header>
            <div className='componentes'>
                <button className='comp-btn' id='contacto' onClick={(e)=>addComponent(e)}>
                    <i class="fa-solid fa-address-book"></i>
                    <span>Contacto</span>
                </button>
                <button className='comp-btn' id='calendario' onClick={(e)=>addComponent(e)}>
                    <i class="fa-solid fa-calendar"></i>
                    <span>Calendario</span>
                </button>
                <button className='comp-btn' id='calif' onClick={(e)=>addComponent(e)}>
                    <i class="fa-solid fa-star"></i>
                    <span>Calificacion</span>
                </button>
                <button className='comp-btn' id='comentario' onClick={(e)=>addComponent(e)}>
                    <i class="fa-regular fa-rectangle-list"></i>
                    <span>Comentario</span>
                </button>
                <button className='comp-btn' id='terms' onClick={(e)=>addComponent(e)}>
                    <i class="fa-solid fa-file-contract"></i>
                    <span>Terminos</span>
                </button>
            </div>
        </section>
    )
}