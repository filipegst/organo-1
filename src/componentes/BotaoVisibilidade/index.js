import './botao-visibilidade.css'


const BotaoVisibilidade = ({mudaVisibilidade}) =>{
    
    return(
        <button className='botao-visibilidade' onClick={mudaVisibilidade}>
            <img src='/imagens/btn-icone.png'></img> 
        </button>
    )
}   
export default BotaoVisibilidade