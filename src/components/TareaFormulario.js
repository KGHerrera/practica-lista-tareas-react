import React, {useState} from "react";
import '../styles/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';

export default function TareaFormulario(props){
    const [input, setInput] = useState('');
    
    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = (e) =>{
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        document.getElementById('input1').value = '';
        setInput('');
        props.onSubmit(tareaNueva);
    }

    return (
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input 
                className="tarea-input"
                type='text'
                placeholder=""
                name='texto' 
                id="input1"
                onChange={manejarCambio} />
            <button className="tarea-boton">
                Agregar Tarea
            </button>
        </form>
    );
}