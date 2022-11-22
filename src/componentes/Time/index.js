import React from 'react'
import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

  const backGroundCSS = {backgroundColor: props.corSecundaria}
  const borderBottonCSS = {borderColor: props.corPrimaria}

  return (
    
    <section className='time' style={backGroundCSS}>
        <h3 style={borderBottonCSS}>{props.nome}</h3>
        <div className='colaboradores'>
          {props.colaboradores.map(colaborador =><Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
        </div>
    </section>
  )
}

export default Time