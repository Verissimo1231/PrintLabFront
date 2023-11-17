import './index.scss';

export default function Realizado(){
    
    return(
        <div className='div-Realizado'>
            <p className='tala'>  Voltar á Página Inicial</p>

<div className='lupa'>
            <div className='container'>
                <div className='centro'>
                <div className='centro2'> <h1> <img src='/assets/images/certinho.png' alt=''/> Pedido Realizado com Sucesso!</h1> </div>

                <div className='gu'> <p>Olá <b>Renan Santana Simão</b> seu pedido está sendo processado. Assim que for aprovado, será enviado um <b>e-mail de confirmação do pagamento.</b> Caso queira saber os status do pedido acesse o <a>link</a>. Agradecemos pela preferência.</p> </div>
                </div>

                <div className='div1'>
                    <div>
                        <h3>Informações do Produto</h3>

                        <p>ID: <b>#</b></p>
                        <p>Total: <b>R$ </b></p>
                        <p>Forma de Pagamento: <b></b></p>
                        <p>Forma de Entrega: <b>Coorreio</b></p>
                        <p>CEP do Local de Entrega: <b></b></p>
                        <p>N° de Rastreio: <b></b></p>
                    </div>

                    <div>
                        <h3>Dados de Pagamento</h3>

                        <p>Finalize o pedido e pague usando o Sicoob Card. Com conta xxxxx-x e agência xxxxx-x e cpf xxxxxxxx.</p>
                    </div>
                </div>

                <div> <p>*Os produtos serão enviados á partir de 2 dias úteis após a confirmação do pagamento.</p> <p>O pedido foi registrado em seu <a>histórico de pedidos</a>.</p> </div>

                </div>

            </div>

        </div>
    );
}