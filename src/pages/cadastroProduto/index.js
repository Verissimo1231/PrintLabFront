import './index.scss';

import storage from 'local-storage';
import { useState } from 'react';

import { Cadastro, cadastro2 } from '../../api/produtoAPI';


export default function CadastroP(){
    const[nome, setNome]=useState('');
    const[categoria, setCategoria]=useState(0);
    const[preco, setPreco]=useState(0);
    const[unidade, setUnidade]=useState(0);
    const[condicao, setCondicao]=useState('');
    const[marca, setMarca]=useState('');
    const[producao, setProducao]=useState(0);
    const[validade, setValidade]=useState(0);
    const[frete, setFrete]=useState(0);
    const[peso, setPeso]=useState(0);
    const[largura, setLargura]=useState(0);
    const[altura, setAltura]=useState(0);
    const[profundidade, setProfundidade]=useState(0);
    const[volume, setVolume]=useState(0);
    const[descricao, setDescricao]=useState('');
    const[imagem, setImagem]=useState();


    async function salvar(){
        try{

        const user = storage('adm-logado').id;
        const produto = await Cadastro(nome,categoria,preco,unidade,condicao,marca,producao,validade,
            frete,peso,largura,altura,profundidade,volume,descricao, user);
        const r = await cadastro2(produto.id,imagem);

        alert('Produto cadastrado com Sucesso!');
        }catch(err){
            alert(err.message);
        }
    }


    function escolherI(){
        document.getElementById('mer').click();
    }

    function mostrarI(){
        return URL.createObjectURL(imagem);
    }


    return(
        <div className='page'>
            <div className='titu'><img src='/assets/images/bagulho1.png' alt=''/> <h3>Cadastrar produto</h3></div>

            <div className='con'>
                <div className='inip'>
                    <div><h4>Nome do Produto</h4> <input type='text' value={nome} onChange={e => setNome(e.target.value)}/> </div>
                    <div><h4>Preço de Venda</h4> <input type='number' value={preco} onChange={e => setPreco(e.target.value)}/> </div>
                </div>

                <div className='inip'>
                    <div><h4>Marca</h4> <input type='text' value={marca} onChange={e => setMarca(e.target.value)}/> </div>
                    <div><h4>Categoria</h4> <input type='number' value={categoria} onChange={e => setCategoria(e.target.value)}/> </div>
                </div>

                <div className='inip'>
                    <div><h4>Unidade</h4> <input type='number' value={unidade} onChange={e => setUnidade(e.target.value)}/> </div>
                    <div><h4>Condição</h4> <input type='text' value={condicao} onChange={e => setCondicao(e.target.value)}/> </div>
                </div>

                <div className='inp3'>
                    <div><h4>Data de Produção</h4> <input type='date' value={producao} onChange={e => setProducao(e.target.value)}/> </div>
                    <div><h4>Data de Validade</h4> <input type='date' value={validade} onChange={e => setValidade(e.target.value)}/> </div>
                </div>

                <div className='inp3'>
                    <div><h4>Frete</h4> <input type='number' value={frete} onChange={e => setFrete(e.target.value)}/> </div>
                    <div><h4>Peso Bruto</h4> <input type='number' value={peso} onChange={e => setPeso(e.target.value)}/> </div>
                    <div><h4>Altura</h4> <input type='number' value={altura} onChange={e => setAltura(e.target.value)}/> </div>
                </div>

                <div className='inp3'>
                    <div><h4>Profundidade</h4> <input type='number' value={profundidade} onChange={e => setProfundidade(e.target.value)}/> </div>
                    <div><h4>Volume</h4> <input type='number' value={volume} onChange={e => setVolume(e.target.value)}/> </div>
                    <div><h4>Largura</h4> <input type='number' value={largura} onChange={e => setLargura(e.target.value)}/> </div>
                </div>

                <div className='inp4'>
                    <div><h4>Adicionar a descrição do produto</h4> <textarea value={descricao} onChange={e => setDescricao(e.target.value)}/> </div>
                </div>

                <div className='divil'>
                    <div className='imol' onClick={escolherI}>  
                    {!imagem && 
                    <img src='/assets/images/imol.png' alt='' />
                    }
                   
                    {imagem &&
                    <img src={mostrarI()} alt='' />
                    }
                     <input id='mer' type='file' onChange={e => setImagem(e.target.files[0])}/> </div>
                </div>

                <div className='butonho'><div></div> <div><button>Retornar</button> <button className='ver' onClick={salvar}>Concluir</button></div> </div>

            </div>

        </div>
    );
}