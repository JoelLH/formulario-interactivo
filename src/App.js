import { useEffect, useState } from 'react';
import './App.css';
import Barra from './componentes/barra/Barra';
import Contenido from './componentes/contenido/Contenido';

function App() {
  const [fields, setFields] = useState([])
  const [rate, setRate] = useState('')

  function handleRate(e){
    let id = e.target.id
    switch(id){
      case "rate1":
        setRate(1)
        break;
      case "rate2":
        setRate(2)
        break;
      case "rate3":
        setRate(3)
        break;
      case "rate4":
        setRate(4)
        break;
      case "rate5":
        setRate(5)
        break;
      default: 
      console.log("no such id")
    }
  }


  function addComponent(e){
    let id  = e.target.id
    switch(id){
      case "contacto":
        setFields(prev=>{
          return [...prev,{type: "contacto"}]
        })
        break;
      case "calendario":
        setFields(prev=>{
          return [...prev,{type: "calendario"}]
        })
        break;
      case "calif":
        setFields(prev=>{
          return [...prev,{type: "calif"}]
        })
        break;
      case "comentario":
        setFields(prev=>{
          return [...prev,{type: "comentario"}]
        })
        break;
      default: 
      console.log("no such id")
    }
  }
  
  function dltComp(e){
    if(fields.length > 0){
      let id = e.target.dataset.id;
      let upDated = [];
      fields.map((field, i) => {
        if(id === `field${i}`){
          upDated = [...fields.slice(0,i),...fields.slice(i + 1)]
        }
      })
    
      setFields([...upDated])
    }
  }
  

  return (
    <div className="App">
      <header className='main-header'><span className='page-title'>Formulario</span></header>
      <div className='subhead'>
        <div className='config'>
          <span className='subhead-title'><i class="fa-solid fa-gear"></i> Configuracion</span>
        </div>
        <div className='editor'>
          <span className='subhead-title'><i class="fa-regular fa-pen-to-square"></i> Editor</span>
        </div>
      </div>
      <div className='main-content'>
        <Barra 
        addComponent= {addComponent}
        />
        <Contenido
          fields = {fields}
          rate = {rate}
          handleRate = {handleRate}
          deleteComp = {dltComp}
        />
      </div>
    </div>
  );
}

export default App;
