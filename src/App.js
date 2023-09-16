import React, {useState, createContext} from 'react';
import header from './header.svg';
import sun from './sun.svg';
import moon from './moon.svg';
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jobs from './pages/jobs';
import data from "./data.json";
import { Routes, Route } from 'react-router-dom';
import Details from './pages/details';

export const ThemeContext = createContext(null);

function App() {
  
  const [theme, setTheme]= useState("light");
    

  const ToggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

    return (
      <ThemeContext.Provider value={{theme, ToggleTheme}}>
        <div className="App" id={theme}>
          <div>
            <div className='header' style={{backgroundImage:`url(${header})`}}>
              <div className='container'>
                <div className='d-none d-md-block d-lg-block d-xl-block'>
                  <div className='d-flex d-row justify-content-between'>
                    <div className='col-md-9 col-lg-10 text-start'><a href="/"><img src={logo} alt='logo'/></a></div>
                    <div className='col-md-3 col-lg-2 text-end'>
                      <div className='switch-mode d-flex d-row text-center align-items-center justify-content-between '>
                        <div className=''><img src={sun} alt='sun'/></div>
                        <div className="form-check form-switch">
                          <input className="form-check-input" onChange={ToggleTheme} type="checkbox" role="switch" 
                          id="flexSwitchCheckDefault" style={{width:48, height:24}}/>
                        </div>
                        <div className=''><img src={moon} alt='moon'/></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-block d-sm-block d-md-none'>
                  <div className='d-flex d-row justify-content-between'>
                    <div className='col- text-start ps-3'><a href="/"><img src={logo} alt='logo'/></a></div>
                    <div className='col-3 text-end'>
                      <div className='switch-mode d-flex d-row '>
                        <div className='col-2 text-start'><img src={sun} alt='sun'/></div>
                        <div className="col-2 form-check form-switch">
                          <input className="form-check-input" onChange={ToggleTheme} type="checkbox" role="switch" 
                          id="flexSwitchCheckDefault" style={{width:36, height:20}}/>
                        </div>
                        <div className='col-1 text-center'><img src={moon} alt='moon'/></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Routes>
              <Route exact path="/" element={<Jobs data={data}/>}/>            
              <Route path="/detail/:id" element={<Details data={data} />} />
            </Routes>
            
          </div>
        </div>
      </ThemeContext.Provider>
    );
}

export default App;
