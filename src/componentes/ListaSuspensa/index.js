import React from 'react'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => { 
  return (
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select 
          onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
            <option value="" disabled placeholder='Selecione o seu Time:'>Selecione o seu Time:</option>
            {props.itens.map(item => {
              return <option key={item}>{item}</option>
            })}
        </select>
    </div>
  )
}

export default ListaSuspensa