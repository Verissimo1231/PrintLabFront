import './index.scss';


export default function Rodape(){

    return(
        <div className='comp-rodape'>
            <div className='dmor'>
                <div className='d'> <h3>Mídias Sociais</h3> <p>Facebook (Brasil)</p> <p>Instagram (Brasil)</p> </div>
                <div className='danada'> <h3> Suporte </h3> <p>Políticas de pós-venda</p> <p>Políticas de segurança</p> <p>Termos de uso</p> <p>Garantia</p> <p>FAQ</p> </div>
                <div className='d'> <h3> Sobre </h3> <p>Sobre Nós</p> <p>Contate-nos</p> <p>Estamos Contratando</p> </div>
                <div className='d'> <h3> Junte-se a Nós </h3> <p>assinar para receber as ultimas noticias</p> <button> Envie seu e-mail </button> <button className='b'> Enviar </button> </div>
            </div> 

            <div className='d2'>
                <img className='logo' src='/assets/images/printlol.png' alt=''/>
                <p> <img className='local' src='/assets/images/local.png' alt=''/>  Rua das Flores, 123, Bairro Novo, Cidade Fictícia, Estado Imaginário, CEP 12345-678.</p>
            </div>

        </div>
    )
}