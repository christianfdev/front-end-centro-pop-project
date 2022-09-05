import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';



export function UserCard({ name, username, assignment } : any){

  let navigate = useNavigate();


  return(
    <div className='card-user'>
      <p className=''><span>Nome: </span>{name}</p>
      <p className=''><span>Username: </span>{username}</p>
      <p className=''><span>Assignemt: </span>{assignment}</p>
      <div className='buttons-user'>
        <Button text='Atualizar'/>
        <Button text='Deletar' />
      </div>
      
    </div>
  )

}