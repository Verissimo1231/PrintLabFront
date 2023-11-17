import './index.scss';
import Cabecao from '../../components/cabecao';

import { useState, useRef } from 'react';
import storage from 'local-storage';
import {useNavigate} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useEffect } from 'react';

import {Login} from '../../api/clienteAPI';

export default function LoginCliente(){
    const[email,setEmail]=useState('');
    const[senha,setSenha]=useState('');
    const[erro, setErro]=useState('');
    const[carregando, setCarregando]=useState(false);

    const navigate = useNavigate();
    const ref = useRef();
    
    useEffect(() => {
        if(storage('cliente-logado')){
            navigate('/cl');
        }
    }, {});

    async function entrar(){
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const r = await Login(email,senha);
            storage('cliente-logado', r);

            setTimeout(() => {
                navigate('/cl');
            }, 3000);

        } catch (err){
            ref.current.complete();
            setCarregando(false);
    
    if(err.response.status === 401){
        setErro(err.response.data.erro);
    }
}
}

    return(
        <div className='div-lg'>
            <LoadingBar color='#f11946' ref={ref}/>

            <Cabecao/>

<div className='divlol'>
    <LoadingBar color='#f11946' ref={ref}/>

            <div className='container'>
                <div className='titu'><h1>Entrar</h1></div>

                <div className='inp'>
                    <h3>N° de telefone ou e-mail</h3>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='inp'>
                    <h3>Senha</h3>
                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>

                <div className='pau'><p>Ao continuar, você concorda com as <a>Condições de Uso</a> do PrintLab.</p></div>

                <div className='but'><button onClick={entrar} disabled={carregando}>Entrar</button></div>

                <div className='erro'> {erro} </div>

            </div>
            </div>
        </div>
    );
}