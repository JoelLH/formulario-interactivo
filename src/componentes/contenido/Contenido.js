import './styles.css';
import Contacto from "../formulario/Contacto"
import Calendario from "../formulario/Calendario"
import Calif from '../formulario/Calif'
import Comentario from '../formulario/Comentario';
import { useState, useEffect } from "react";

export default function Contenido(props){


    const {fields, rate, handleRate, deleteComp} = props;

    
    return (
        <section className='form-section'>
            <div className='form-content' id='form-content'>
                {fields.map((field, i) =>{
                    
                    if(field.type === 'contacto'){
                        console.log(field.type)
                        return  <Contacto
                                id={`field${i}`}
                                deleteComp = {deleteComp}
                                />
                    }else if(field.type === 'calendario'){
                        return <Calendario
                                id={`field${i}`}
                                deleteComp = {deleteComp}
                                />
                    }else if(field.type === 'calif'){
                        return <Calif rate={rate}
                                    handleRate = {handleRate}
                                    id={`field${i}`}
                                    deleteComp = {deleteComp}
                                />
                    }else if(field.type === 'comentario'){
                        return <Comentario rate={rate}
                                    handleRate = {handleRate}
                                    id={`field${i}`}
                                    deleteComp = {deleteComp}
                                />
                    }
                })}
            </div>
        </section>
    )
}