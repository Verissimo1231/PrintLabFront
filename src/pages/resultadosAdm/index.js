import './index.scss';
import Histolico from '../../components/divHistorico';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';


export default function ResultadosA(){

    return(
        <div className='div-page'>
            
            <Cabecalho/>
            <div className='container'>

            

            <a>Voltar á tela inicial</a>

            <h2>Resultados</h2>
            <p>Resultados com base em seu código SKU</p>

            <Histolico/>
            <Histolico/>
            <Histolico/>

            </div>
            <Rodape/>
        
        
        </div>
    );
}