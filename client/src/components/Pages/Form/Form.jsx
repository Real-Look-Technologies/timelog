import React, { useState } from 'react'
import './Form.css'
function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [origem,setOrigem]=useState('')
  const [destino,setDestino]=useState('')
  const [nomeDest,setNomeDest]=useState('')
  const [peso,setPeso]=useState('')
  const [vol,setVol]=useState('')
  const [dataEm,setDataem]=useState('')
  const [dataCh,setDataCh]=useState('')
  function sendEmail(){
    if(name===''||email===''||origem===''||destino===''|nomeDest===''||peso===''||vol===''||dataEm===''||dataCh===''){
      alert('preencha todos os campos!')    
    }
  }

  return(
    <div className='container'>
      <h1 className='title'>Solicitar cotação</h1>

      <form className='form' onSubmit={sendEmail}>
        <input
          className='input'
          type='text'
          placeholder='Digite seu nome/Nome da empresa'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite seu email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite a origem'
          onChange={(e) => setOrigem(e.target.value)}
          value={origem}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite o destino'
          onChange={(e) => setDestino(e.target.value)}
          value={destino}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite o nome do destinatário'
          onChange={(e) => setNomeDest(e.target.value)}
          value={nomeDest}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite o peso'
          onChange={(e) => setPeso(e.target.value)}
          value={peso}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite o volume'
          onChange={(e) => setVol(e.target.value)}
          value={vol}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite a data de embarque'
          onChange={(e) => setDataem(e.target.value)}
          value={dataEm}
        />

        <input
          className='input'
          type='text'
          placeholder='Digite a data de chegada'
          onChange={(e) => setDataCh(e.target.value)}
          value={dataCh}
        />

        <input className='button' type='submit' value='Enviar'/>
      </form>
    </div>
  );
}

export default App