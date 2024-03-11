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

  const [user, setUser] = useState({ id: '', name: '', email: ''});

  return (
    <userContext.Provider value={{ user, setUser}}>
      <Router basename='/sistema-angariador-imoveis'>
        <Routes>
          {
            !user.id 
              ? (
                  <>
                    <Route path='/' element={<Login />}/>
                    <Route path='/registrar' element={<Registration />}/>
                    <Route path='/*' element={<Login />}/>
                  </>
                )
              : (
                <Route path='/' element={<Layout />} >
                  <Route index element={<Home />}/>
                  <Route path='listagem-de-contatos' element={<Listagem />}/>
                  <Route path='cadastro' element={<Cadastro />}/>
                  <Route path='home' element={<Home />}/>
                  <Route path='*' element={<Home />}/>
                </Route>
              )
          }
        </Routes>
      </Router>
    </userContext.Provider>
  )
}

export default App
