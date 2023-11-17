import './index.scss';
import Carinho from '../../components/divCarrinho'; 
import Cabeca from '../../components/cabeca';

export default function Carrinho(){

    return(
        <div className='div-Carrinho'>
            <Cabeca/>

            <div className='container'>
                <div> <div><h1>Meu Carrinho</h1> <div className='titu'><p>  Voltar aos Resultados</p></div> </div></div>

                <div className='supla'>
                    <div className='car'>

                        <div className='e'>
                        <h1>Produtos</h1>

                        <Carinho/>
                        <Carinho/>
                        <Carinho/>

                        </div>

                        <div className='deta'>
                            <div> <p>Resumo da Compra</p> </div>

                            <div className='d'></div>

                            <div> <p>Subtotal: </p>
                            <p>Frete: </p>
                            </div>

                            <div className='d'></div>

                            <div> <p>Total do Pedido: </p> </div>
                            
                            <div className='but'> <button> Finalizar Compra </button> </div>

                        </div>

                    </div>



                </div>
            </div>

        </div>
    );
}