import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Editor from './Components/Editor';
import Alert from './Components/Alert';
import About from './Components/About';
import TextForm from './Components/TextForm';

import './App.css';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
       setAlert({
         msg:message,
         type:type
       })
       setTimeout(()=>{
         setAlert(null);
       },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="gray";
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <div className="App">
           <Router>       
       <Editor title="Editor" link="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
         <Switch>
           <Route path="/About"><About mode={mode}/></Route>
           <Route path="/"><TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/></Route>
           
           </Switch>
       </div>
       </Router>
    </div>
  );
}

export default App;
