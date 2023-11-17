import './index.scss';
import Cabeca from '../../components/cabeca';

import storage from 'local-storage';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import { useState } from 'react';


export default function Cliente(){
    const[user,setUser]=useState('');
    const[email,setEmail]=useState('');
    const[senha,setSenha]=useState('');

    const navigate=useNavigate();

    useEffect(() => {
        if(!storage('cliente-logado')){
            navigate('/lc');
        } else{
            const clienteLogado = storage('cliente-logado');
            setUser(clienteLogado.nome);
            setEmail(clienteLogado.email);
        }
    }, {});

    function sair(){
        storage.remove('cliente-logado');
        navigate('/');
    }

    function trocar(){
        storage.remove('cliente-logado');
        navigate('/lc');
    }

    return(
        <div className="div-CLiente">

            <Cabeca/>

            <div className='titu'><h2>Minha Conta</h2></div>

            <div className="container">
                <div className="divs"> <h2> Visão Geral </h2> <a> Favoritos </a> <a> Meus Pedidos </a> <a> Suas Mensagens </a> <a> Atendimento ao Cliente </a> <a> Devoluções </a> <a onClick={trocar}> Trocar de Conta </a> <a onClick={sair}> Sair </a> </div>

                <div className='d'></div>

                <div className="divs">

                    <div className="caixa"> <div className='ima'><img src='/assets/images/user.png' alt=''/></div>
                    <div className='caixa2'> <div><h2>{user}</h2></div> <div><a>Precisando de algo?</a></div> </div>
                    </div>

                    <div className='titu2'><h2>Visão Geral</h2></div>

                    <div> <h3>E-mail</h3> <p>{email}</p> </div>

                    <div> <h3>Endereço</h3> <p>XXXXXXXX - 67</p> <p>São Paulo - São Paulo</p> </div>

                    <div> <h3>Formas de pagamento</h3> <p>SicoobCard:</p> <p>CPF:</p> <p>Nº Cartão:</p> </div>

                    <div className='d2'></div>

                </div>

            </div>

        </div>
    );
}