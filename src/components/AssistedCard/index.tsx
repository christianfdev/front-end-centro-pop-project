import './styles.css';
import { useNavigate } from 'react-router-dom';



export function AssistedCard({ name, id } : any){

  let navigate = useNavigate();


  return(
    <div className='card-assisted'>
      <span className='name'>{name}</span>
      <a onClick={ () => {navigate(`/assisted/${id}`)}} className='more'>+</a>
    </div>
  )

}