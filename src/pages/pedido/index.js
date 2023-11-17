import './index.scss';

export default function Endereco(){

    return(
        <div className='div-Pedido'>

        <div className='engloba'>

        <div className='menu'>

            <div>
                <p>Voltar à página inicial</p>
                <h3>Finalização da compra</h3>
                <p>Apenas mais um passo para que enviemos o seu produto !</p>
            </div>

            <div className='carton'>
                <h4>Como você prefere pagar?</h4>

                <div className='sig'>
                    <div className='rad'> <input type='radio'/> <img src='/assets/images/pix.png' alt=''/> <h4>Pix</h4> </div>
                    <div className='rad'> <input type='radio'/> <img src='/assets/images/caixa.png' alt=''/> <h4>Caixa</h4> </div>
                    <div className='rad'> <input type='radio'/> <img className='gmi' src='/assets/images/elo.png' alt=''/> <h4>Elo</h4> </div>
                    <div className='rad'> <input type='radio'/> <img className='gmi' src='/assets/images/visa.png' alt=''/> <h4>Visa</h4> </div>
                    <div className='rad'> <input type='radio'/> <img src='/assets/images/jorge.png' alt=''/> <h4>Sicoob Card</h4> </div>
                </div>

                <div className='sig2'>
                    <h4>Outros meios de pagamento</h4>
                    <div className='rad'> <input type='radio'/> <img src='/assets/images/boleto.png' alt=''/> <h4>Boleto</h4> </div>
                </div>

            </div>

            <div className='pedido'>
                <div className='titu'><h2>Informações do Cartão</h2></div>

                <div className='jogo'>

                    <div className='inpo'>

                    <div className='inp'>
                        <div><input type='text' placeholder='Número do Cartão'/></div>
                    </div>

                    <div className='inp'>
                        <div><input type='text' placeholder='Nome Completo'/></div>
                    </div>

                    <div className='inp'>
                        <div><input type='text' placeholder='Código de Segurança'/></div>
                    </div>

                    <div className='inp'>
                        <div><input type='text' placeholder='CPF do Titular'/></div>
                    </div>

                    </div>

                    <div className='imag'><img src='/assets/images/cartao.png' alt=''/></div>
                </div>

            </div>
</div>

            <div className='compla'>
        <div className='d'></div>

        <div className='ahah'>
            <img src='/assets/images/imacar.png' alt=''/>
            <a>Nome do Produto</a>
            <a>Quantidade: 01</a>
            <a>Tipo: x</a>
        </div>

        <div className='d'></div>

        <div className='diu'> <p>Produto</p> <p>R$9098</p> </div>

        <div className='d'></div>

        <div className='diu'> <p>Frete</p> <p>R$7866</p> </div>

        <div className='d'></div>

        <div className='dui'> <p>Você Pagará</p> <p>R$6723</p> </div>

        <div className='bu'> <button> Concluir </button> </div>
    </div>

    </div>

            </div>
    );
}