import './index.scss';

export default function Status(){

    return(
        <div className='div-Status'>

            <div className='titul'>
                <div><p>Voltar á Página Inicial</p></div>
                <div><h3>Histórico de Pedidos</h3></div>
            </div>

<div className='eu-engoli'>
            <div className='container'>
                <h3>Dados do seu Ultimo Pedido</h3>
                <h3>Pedido em Andamento</h3>

                <div className='div1'>
                    <div> <p>Transportadora: </p> <p>ID Pedido: </p> <p>N° Rastreio: </p> </div>
                    <div> <p>Destino</p> <p>Catapinbas</p> <p>São Paulo</p> </div>
                </div>

                <div className='div1-5'>

                    <div className='lolo'>
                        <p className='verdin'>Postado</p>
                        <h3>Chegará no dia 17 de junho</h3>

                        <div className='tomomamemae'>
                            <div className='linha'>
                                <div className='eles'> <div className='verde'></div> <div className='para'><p className='verdin'>Postado</p>
                                     <p className='cla'>Dia 15 de junho,</p>
                                     <p className='cla'>aguardando a coleta</p>
                                </div> </div>

                               <div className='ll'> <div className='l'></div> </div>

                                <div className='eles'> <div className='ll'><div className='bola'></div></div> <div className='para'><p className='verdin'>Coletado</p></div> </div>

                                <div className='ll'> <div className='l'></div> </div>

                                <div className='eles'> <div className='ll'><div className='bola'></div></div> <div className='para'> <p className='verdin'>Em trânsito com Sedex</p> </div> </div>

                                <div className='ll'> <div className='l'></div> </div>

                                <div className='eles'> <div className='ll'><div className='bola'></div></div> <div className='para'><p className='verdin'>Entregue</p></div> </div>
                            </div>

                        </div>

                    </div>

                    <div className='lolo2'>
                        <h3>Fale com os Correios</h3>

                        <p>Seu pedido está sendo transportado pelo Correios Sedex. Entre em contato com a transportadora em caso de dúvidas sobre:</p>

                        <p><b>.</b> Prazo de entrega</p>
                        <p><b>.</b>  O estado atual da sua encomenda</p>
                        <p><b>.</b>  Problemas relacionados ao endereço de entrega</p>

                        <p>Telefone: 11 12030283</p>

                        <div className='bu'><button>Contratar Transportadora</button></div>
                    </div>

                </div>

            </div>

            </div>

        </div>
    );
}