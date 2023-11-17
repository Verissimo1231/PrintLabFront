import './index.scss';
import { Link } from 'react-router-dom';

export default function cabecao(){

    return(
        <div className='cabecao'><div><img src='/assets/images/printlol.png' alt='' /></div> <div><a>contate-nos</a> <a><Link to='/'>Voltar</Link></a></div> </div>
    );
}