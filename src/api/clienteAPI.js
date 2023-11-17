import axios from 'axios';
const api = axios.create({
    baseURL:'http://129.148.42.252:3024'
});


export async function Login(email,senha){
    const r = await api.post('/cliente/login', 
            {email: email,
            senha: senha});

    return r.data;
}


export async function Criar(nome, email, senha){
    const r = await api.post('/cliente/criar',
            {nome: nome,
            email: email,
            senha: senha});

    return r.data;
}