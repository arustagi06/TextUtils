// jshint esversion:6
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert(
      {
        msg:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }; 
  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  };
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      {/* <Switch> */}
        {/* /users --> component 1
            /users/home --> component 2 */}
              {/* <Route exact path="/about"> */}
                {/* <About /> */}
              {/* </Route>
              <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter text to apply changes" mode={mode}/>
              {/* </Route> */}
      {/* </Switch>
    </Router> */}
  </>
  );
}

export default App;