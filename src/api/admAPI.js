import axios from 'axios';
const api = axios.create({
    baseURL:'http://129.148.42.252:3024/'
});

export async function LoginA(email,senha){
    const r = await api.post('/adm/login', 
            {email: email,
            senha: senha});

    return r.data;
}