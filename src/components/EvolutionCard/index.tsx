import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';



export function EvolutionCard({ data, demand, description, status, quantity, id, del, assisted, isDemand=false } : any){

  let navigate = useNavigate();


  return(
    <div className='card-evolution'>
      <p className=''><span>Data: </span>{data}</p>
      <p className=''><span>Demanda: </span>{demand}</p>
      <p className=''><span>Descrição: </span>{description}</p>
      <p className=''><span>Status: </span>{status}</p>
      <p className=''><span>Quantidade: </span>{quantity}</p>

      
      <div className='buttons-evolution'>

        {
          isDemand ? <Button text='Perfil' onClick={() => navigate(`/assisted/${assisted}`)}/> : null
        }
        
        <Button text='Atualizar' onClick={() => navigate(`/new-evolution/${assisted}/${id}`)}/>
        <Button text='Deletar' onClick={del}  />
      </div>
      
    </div>
  )

}