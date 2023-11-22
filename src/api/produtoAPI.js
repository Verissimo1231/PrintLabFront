import axios from 'axios';
const api = axios.create({
    baseURL:'http://129.148.42.252:3024/...'
});


export async function Cadastro(nome,categoria,preco,unidade,condicao,marca,producao,validade,
    frete,peso,largura,altura,profundidade,volume,descricao, user){
        const r = await api.post('/produto',
                {
                    nome:nome,
                    categoria:categoria,
                    preco:preco,
                    unidade:unidade,
                    condicao:condicao,
                    marca:marca,
                    producao:producao,
                    validade:validade,
                    frete:frete,
                    peso:peso,
                    largura:largura,
                    altura:altura,
                    profundidade:profundidade,
                    volume:volume,
                    descricao:descricao,
                    user:user
                });
                
        return r.data;
    }


    export async function cadastro2(id, imagem){
        const formData = new FormData();
        formData.append('', imagem);

        const r = await api.put(`/produto/${id}/imagem`,formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            },
        });

        return r.status;
    }


    export async function Consulta(nome){
        const r = await api.get(`/produto/busca?nome=${nome}`)

        return r.data;
    }


    export async function Deletar(id){
        const r = await api.delete(`/produto/${id}`);

        return r.status;
    }


    export async function Consulta2(id){

    }