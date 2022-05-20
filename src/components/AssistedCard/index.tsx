import './styles.css';
import { useNavigate } from 'react-router-dom';



export function AssistedCard({ name } : any){

  let navigate = useNavigate();

  return(
    <div className='card-assisted'>
      <span className='name'>{name}</span>
      <a onClick={ () => {navigate("/assisted")}} className='more'>+</a>
    </div>
  )

}