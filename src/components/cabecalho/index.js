import './index.scss';
import { Link } from 'react-router-dom';


export default function Cabecalho(){

    return(<div className="header">
    <div className="cima">
      <img src="/assets/images/printlol.png" alt="" class="imglogo"/>
      <div className='inp'><input type="text" placeholder="Pesquisar" className="inputpesquisa" /> <button><img src='/assets/images/lupa.png' alt=''/></button> </div>
      <Link className="butcr" to='/cr'>Criar conta</Link>
      <Link className="butcr" to='/lc'>Login</Link>
    </div>
    <div class="baixo">
        <a href="" class="pto">Categorias</a>
        <a href="" class="pto">Ofertas Diárias</a>
        <a href="" class="pto">Histórico</a>
        <a href="" class="pto">E-mail</a>
        <a href="" class="pto">Sobre nós</a>
        <div class="car">
            <a href="www.google.com" class="opa">
        <img src="/assets/images/qawd-removebg-preview.png" alt="" className="imgcar"/>
    </a>
    </div>
    </div>
</div>)
}