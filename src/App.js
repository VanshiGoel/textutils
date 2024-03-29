import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
   BrowserRouter,
   Routes,
   Route
 } from 'react-router-dom';
function App() {
   const [mode,setMode]=useState('light')
   const [alert,setAlert]=useState(null)
   const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        typ:type
       })
       setTimeout(()=>{
           setAlert(null)
       },1000)
   }
   const toggleMode=()=>{
      if(mode==='light')
      {
         setMode('dark')
         document.body.style.backgroundColor='#0d173f'
         showAlert("DarkMode has been Enabled",'success')
      }
      else{
         setMode('light')
         document.body.style.backgroundColor='white'
         showAlert("LightMode has been Enabled",'success')
      }
   }
  return (
    <>
    <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact path="/" 
               element={ 
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
               } 
             ></Route>
           </Routes> 
        </div>
      </BrowserRouter>
  </>
  );
}

export default App;
