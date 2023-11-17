import './index.scss';

export default function Endereco(){

    return(
        <div className='div-endereco'>
            <div className='container'>

        <div className='engloba'>
           
            <div>
                <p>Voltar à página inicial</p>
                <h3>Finalização da compra</h3>
                <p>Apenas mais um passo para que enviemos o seu produto !</p>
            </div>

                <div className='vsf'>

            <div className='endereco'>
                <h3>Adicione um endereço</h3>

                <div className='inp1'>
                    <h3></h3>
                    <input type='text' />
                </div>

                <div className='inp'>
                    <div className='inp1'> <h3>CEP</h3> <input type='text' /> </div>
                    <div className='inp2'> <div> <h3>Estado</h3> <input className='i1' type='text' /> </div> <div> <h3>Cidade</h3> <input className='i2' type='text' /> </div> </div>
                    <div className='inp3'> <h3>Bairro</h3> <input type='text' /> </div>
                    <div className='inp2'> <div> <h3>Rua/Avenida</h3> <input className='i1' type='text' /> </div> <div> <h3>Número</h3> <input className='i2' type='text' /> </div> </div>
                    <div className='inp3'> <h3>Complemento(Opcional)</h3> <input type='text' /> </div>
                </div>

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

        <div className='bu'> <button> Continuar </button> </div>
    </div>

            </div>
        </div>
    );
}