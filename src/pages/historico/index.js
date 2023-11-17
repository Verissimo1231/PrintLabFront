import './index.scss';
import Histolico from '../../components/divHistorico';

export default function Historico(){

    return(
        <div className='div-Historico'>
            <div>
                <div><p>  Voltar á Página Inicial</p></div>
                <div><h1>Histórico de Pedidos</h1></div>
            </div>

            <div className='andamento'>
                <h1>Pedidos em Andamento</h1>

                <div className='comp-div1'>
            <div> <img src='/assets/images/imacar.png' alt=''/> </div>
            <div> <p>Nome do Produto</p> <p>Preço</p> </div>
            <div className='ds'></div>
            <div> <p>Quantidade: </p> <p>Marca: </p> <p>Modelo: </p> </div>
            <div className='ds'></div>
            <div className='mahi'> <a>Preço: </a> <a>Frete: </a> <a>Forma de Pagamento: </a> <a>Previsão de Entrega: </a> <a className='au'>Verificar Status do Pedido</a> </div>
        </div>
        
            </div>

        <div className='realizados'>
            <h1>Pedidos Realizados</h1>

            <Histolico/>
            <Histolico/>
            <Histolico/>

        </div>

        </div>
    );
}