import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cliente from './pages/userCliente';
import Adm from './pages/userAdm';
import Carrinho from './pages/carrinho';
import Historico from './pages/historico';
import Status from './pages/status';
import Realizado from './pages/realizado';
import Endereco from './pages/endereco';
import Pedido from './pages/pedido';
import Produto from './pages/produto';
import Home from './pages/home';
import LoginCliente from './pages/loginCliente';
import LogiAdm from './pages/loginAdm';
import CriarConta from './pages/criarConta';
import CadastroP from './pages/cadastroProduto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='cl' element={<Cliente/>}/>
      <Route path='a' element={<Adm/>}/>
      <Route path='c' element={<Carrinho/>}/>
      <Route path='h' element={<Historico/>}/>
      <Route path='s' element={<Status/>}/>
      <Route path='r' element={<Realizado/>}/>
      <Route path='e' element={<Endereco/>}/>
      <Route path='p' element={<Pedido/>}/>
      <Route path='pr' element={<Produto/>}/>
      <Route path='lc' element={<LoginCliente/>}/>
      <Route path='la' element={<LogiAdm/>}/>
      <Route path='cr' element={<CriarConta/>}/>
      <Route path='cp' element={<CadastroP/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

