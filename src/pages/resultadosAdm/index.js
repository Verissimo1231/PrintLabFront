import './index.scss';
import Histolico from '../../components/divHistorico';

export default function ResultadosA(){

    return(
        <div className='div-page'>

            

            <a>Voltar á tela inicial</a>

            <h2>Resultados</h2>
            <p>Resultados com base em seu código SKU</p>

            <Histolico/>
            <Histolico/>
            <Histolico/>

        </div>
    );
}