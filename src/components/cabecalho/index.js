import './index.scss';


export default function Cabecalho(){

    return(<div className="header">
    <div class="cima">
      <img src="/assets/images/printlol.png" alt="" class="imglogo"/>
      <input type="text" placeholder="Pesquisar" class="inputpesquisa" />
      <button class="butcr">Criar conta</button>
      <button class="butcr">Login</button>
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