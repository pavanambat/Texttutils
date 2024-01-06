import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
//import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Switch,


} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasess = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls)=> {
    removeBodyClasess();
    document.body.classList.add('bg-'+cls)
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title = "TextUtilis" mode={mode} toggleMode={toggleMode} HomeText = "Home" aboutText = "About"/>
   
      <Alert alert = {alert}/>
      <div className='container my-3'>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading = "Enter Your Text here" mode = {mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
    
  );
}

export default App;
