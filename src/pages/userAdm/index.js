import './index.scss';

import storage from 'local-storage';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import { useState } from 'react';

export default function Adm(){
    const[user,setUser]=useState('');
    const[email,setEmail]=useState('');

    const navigate=useNavigate();

    useEffect(() => {
        if(!storage('adm-logado')){
            navigate('/la');
        } else{
            const admLogado = storage('adm-logado');
            setUser(admLogado.nome);
            setEmail(admLogado.email);
        }
    }, {});

    function sair(){
        storage.remove('adm-logado');
        navigate('/la');
    }

    return(
        <div className="div-Adm">


            <div className='titu'><h2>Minha Conta Administrativa</h2></div>

            <div className="container">
                <div className="divs"> <h2> Visão Geral </h2> <a> Favoritos </a> <a> Meus Pedidos </a> <a> Suas Mensagens </a> <a> Atendimento ao Cliente </a> <a> Devoluções </a> <a onClick={sair}> Sair </a> </div>

                <div className='d'></div>

                <div className="divs">

                    <div className="caixa"> <div className='ima'><img src='/assets/images/adm.png' alt=''/></div>
                    <div className='caixa2'> <div><h2>{user}</h2></div> <div><a>Administrador</a></div> </div>
                    </div>

                    <div className='titu2'><h2>Visão Geral</h2></div>

                    <div> <h3>E-mail Empresarial</h3> <p>{email}</p> </div>

                    

                    <div className='d2'></div>

                </div>

            </div>

        </div>
    );
}