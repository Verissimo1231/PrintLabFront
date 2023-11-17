import './index.scss';
import ResA from '../../components/ResA';

export default function ResultadosA(){

    return(
        <div className='div-page'>
            <a>Voltar á tela inicial</a>

            <h2>Resultados</h2>
            <p>Resultados com base em seu código SKU</p>

            <ResA/>
            <ResA/>
            <ResA/>

        </div>
    );
}