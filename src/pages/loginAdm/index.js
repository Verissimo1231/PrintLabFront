import './index.scss';
import Cabecao from '../../components/cabecao';

import { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import storage from 'local-storage';
import { useEffect } from 'react';

import {LoginA} from '../../api/admAPI';


export default function LoginAdm(){
    const[email, setEmail]=useState('');
    const[senha, setSenha]=useState('');
    const[erro, setErro]=useState('');
    const[carregando, setCarregando]=useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if(storage('adm-logado')){
            navigate('/a');
        }
    }, {});

    async function entrar(){
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const r = await LoginA(email,senha);
            storage('adm-logado', r);

            setTimeout(() => {
                navigate('/a');
            }, 3000);

        } catch (err){
            ref.current.complete();
            setCarregando(false);
    
    if(err.response.status === 401){
        setErro(err.response.data.erro);
    }}}

    return(
        <div className='div-lo'>
            <LoadingBar color='#f11946' ref={ref}/>

            <Cabecao/>

<div className='divlol'>
            <div className='container'>
                <div className='titu'><h1>Entrar como administrador</h1></div>

                <div className='inp'>
                    <h3>N° de telefone ou e-mail empresarial</h3>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='inp'>
                    <h3>Senha</h3>
                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>

                <div className='pau'><p>Ao continuar, você concorda com as <a>Condições de Uso</a> do PrintLab.</p></div>

                <div className='but'><button onClick={entrar} disabled={carregando}>Entrar</button></div>

                <div className='erro'>{erro}</div>

            </div>
            </div>
        </div>
    );
}