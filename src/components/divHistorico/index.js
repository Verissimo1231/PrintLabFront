import './index.scss';

export default function Histolico(props){

    return(
        <div className='comp-div2'>
            <div> <img src='/assets/images/imacar.png' alt=''/> </div>
            <div> <p>Nome do Produto</p> <p>Preço</p> </div>
            <div className='ds'></div>
            <div> <p>Quantidade: </p> <p>Marca: </p> <p>Modelo: </p> </div>
            <div className='ds'></div>
            <div className='lapa'> <a>Preço: </a> <a>Frete: </a> <a>Forma de Pagamento: </a> <a>Previsão de Entrega: </a> </div>
        </div>
    );
}