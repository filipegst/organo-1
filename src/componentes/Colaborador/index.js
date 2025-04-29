import './colaborador.css'
import { IoCloseCircleSharp, IoHeartOutline, IoHeart } from "react-icons/io5";


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar(){
        aoFavoritar(colaborador.id)
    }
    
    return (<div className="colaborador">
        
        <IoCloseCircleSharp 
            className='deletar' 
            size={25} 
            onClick={() => aoDeletar(colaborador.id)}>

        </IoCloseCircleSharp>
        
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                {colaborador.favorito 
                    ? <IoHeart onClick={favoritar} size={25} color='#f01010' /> 
                    : <IoHeartOutline onClick={favoritar} size={25} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador