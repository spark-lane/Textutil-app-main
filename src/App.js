import logo from './logo.svg';
import './App.css';
 

import Product from './Componant/Product';
import Navbar from './Componant/Navbar';
import Textform from './Componant/Textform';
import React, { useState } from 'react';
import About from './Componant/About';
import Alert from './Componant/Alert';
import {
  BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {

      const [mode, setMode] = useState('light');
      const [alert,setAlert]=useState(null);
      const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type,
        });
        setTimeout(()=>{
          setAlert(null);
        },1500);
      };
     const  toggleMode=()=>{
        if(mode ==='light'){
        setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark Mode is enabled","success");
        document.title="Dark Mode";
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light Mode is enabled","success");
        document.title="Light Mode";
      }
    }
  return (
   <Router>
    <Navbar title="Know your text" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container mx-3' >
    <Routes>
    <Route path='/' element={<Textform showAlert={showAlert} mode={mode}/>}></Route>
    <Route path='/about' element={<About/>}></Route>  
    </Routes>
    </div>
   </Router>
  );
  }

export default App;
