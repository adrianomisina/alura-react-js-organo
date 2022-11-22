import React, {useState} from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/index';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')


  const aoSalvar = (e) =>{
    e.preventDefault()
    props.aoColaboradorCadastrado({
      nome, 
      cargo,
      imagem, 
      time
    })
  }

  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar os dados do colaborador</h2>
            <CampoTexto 
              obrigatorio={true} 
              label="Nome" 
              placeholder="Digite seu nome"
              valor={nome}
              aoAlterado={valor => setNome(valor)}
            />

            <CampoTexto 
              obrigatorio={true} 
              label="Cargo" 
              placeholder="Digite seu cargo"
              valor = {cargo}
              aoAlterado = {valor => setCargo(valor)}
            />

            <CampoTexto
              obrigatorio={true} 
              label="Imagem" 
              placeholder="Digite o enderço da imagem"
              valor = {imagem}
              aoAlterado = {valor => setImagem(valor)}
             />

            <ListaSuspensa 
              required={true} 
              label="Time" 
              itens={props.times}
              valor = {time}
              aoAlterado = {valor => setTime(valor)}/>

            <Botao>
              Criar Card
            </Botao>
        </form>
    </section>
  )
}

export default Formulario