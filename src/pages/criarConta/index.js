import './index.scss';
import Cabecao from '../../components/cabecao';

import { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import {Criar} from '../../api/clienteAPI';


export default function CriarConta(){
    const[nome, setNome]=useState('');
    const[email, setEmail]=useState('');
    const[senha, setSenha]=useState('');
    const[carregando, setCarregando]=useState(false);

    const navigate = useNavigate();
    const ref = useRef();


    async function salvar(){
        ref.current.continuousStart();
        setCarregando(true);

        try{
            const r = await Criar(nome, email, senha);

            alert('Conta Criada com sucesso!');

            setTimeout(() => {
                navigate('/lc');
            }, 3000);

        } catch(err){
            ref.current.complete();
            setCarregando(false);
        }
    }

    return(
        <div className='div-log'>
            <LoadingBar color='#f11946' ref={ref}/>


            <Cabecao/>

<div className='divlol'>
            <div className='container'>
                <div className='titu'><h1>Criar Conta</h1></div>

                <div className='inp'>
                    <h3>Nome de Usuário</h3>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                </div>

                <div className='inp'>
                    <h3>N° de telefone ou e-mail</h3>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='inp'>
                    <h3>Senha</h3>
                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                </div>

                <div className='pau'><p>Ao continuar, você concorda com as <a>Condições de Uso</a> do PrintLab.</p></div>

                <div className='but'><button onClick={salvar} disabled={carregando}>Criar</button></div>

            </div>
            </div>
        </div>
    );
}