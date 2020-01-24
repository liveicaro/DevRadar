import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

//COMPONENTE :  Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//PROPRIEDADE: Informações que um componente PAI para o componente FILHO
//ESTADO: informações mantidas pelo componente (lembrar: imutabilidade)


function App() {

  const [devs, setDevs]  = useState([]);



  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
      loadDevs();

  },[]);

  async function handleAddDev(data){    

    const response = await api.post('/devs', data)

   
    setDevs([...devs, response.data]);


  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev =>(
            <DevItem key={dev.id} dev={dev}/>
          ))}
          


      
        </ul>


      </main>

    </div>
  );
}

export default App;
