import { useState, createContext } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/system/Layout/Layout';
import Login from './pages/access/Login/Login';
import Listagem from './pages/system/Conteudo/Listagem';
import Registration from './pages/access/Registration/Registration';
import Cadastro from './pages/system/Conteudo/Cadastro';
import Home from './pages/system/Conteudo/Home';

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({ id: '', name: '', email: '', password: '' });

  return (
    <userContext.Provider value={{ user, setUser}}>
      <Router basename='/sistema-angariador-imoveis'>
        <Routes>
          {
            !user.id 
              ? (
                  <>
                    <Route path='/' element={<Login />}/>
                    <Route path='Registrar' element={<Registration />}/>
                    <Route path='*' element={<Login />}/>
                  </>
                )
              : (
                <Route path='/' element={<Layout />} >
                  <Route index element={<Home />}/>
                  <Route path='Listagem' element={<Listagem />}/>
                  <Route path='cadastro' element={<Cadastro />}/>
                  <Route path='home' element={<Home />}/>
                  <Route path='*' element={<Listagem />}/>
                </Route>
              )
          }
        </Routes>
      </Router>
    </userContext.Provider>
  )
}

export default App
