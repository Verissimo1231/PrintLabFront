import './index.scss';

export default function Carinho(props){

    return(
        <div className='comp-div'>
            <div> <img src='/assets/images/imacar.png' alt=''/> </div>
            <div> <p>Nome do Produto</p> <p>Preço</p> </div>
            <div className='ds'></div>
            <div> <p>Quantidade: </p> <p>Marca: </p> <p>Modelo: </p> </div>
        </div>
    );
}