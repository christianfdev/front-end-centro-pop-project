import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';



export function EvolutionCard({ data, description, id, del, assisted } : any){

  let navigate = useNavigate();


  return(
    <div className='card-evolution'>
      <p className='data-card-evolution'><span>Data: </span>{data}</p>
      <p className='description-card-evolution'><span>Descrição: </span>{description}</p>
      <div className='buttons-evolution'>
        <Button text='Atualizar' onClick={() => navigate(`/new-evolution/${assisted}/${id}`)}/>
        <Button text='Deletar' onClick={del}  />
      </div>
      
    </div>
  )

}