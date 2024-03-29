import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';

export function Home(){
  let navigate = useNavigate();
  let userId = localStorage.getItem('userId');
  let assignment = localStorage.getItem('assignment');



  console.log(assignment)
  console.log(userId)
    return(

      <div className='home'>
        <NavBar page='Página Inicial'/>

        <section className='home-options'>
         
            
        {
          assignment === 'ADMINISTRADOR' ? 
          <>
            <div className='section'>
              <span className='section-title'>Usuários</span>
              <div className='home-buttons'>
                <Button text='Cadastrar Usuário' onClick={() => {navigate("/user")}}/>
                <Button text='Listar Usuários' onClick={() => {navigate(`/users`)}}/>
              </div>
            </div>
          </>
          : assignment === 'ORIENTADOR' ?  
          <>
            <div className='section'>
              <span className='section-title'>POP+</span>
              <div className='home-buttons'>
                <Button text='Novo Cadastro' onClick={() => {navigate("/register")}}/>
                <Button text='Listar Assistidos' onClick={() => {navigate("/assisteds")}}/>
                <Button text='Minhas Evoluções' onClick={() => {navigate(`/evolution/user/${userId}`)}}/>
              </div>
            </div>
          </>
          : assignment === 'ASSISTENTE' ?
          <>
            <div className='section'>
              <span className='section-title'>POP+</span>
              <div className='home-buttons'>
                <Button text='Demandas' onClick={() => {navigate('/demands')}}></Button>
                <Button text='Novo Cadastro' onClick={() => {navigate("/register")}}/>
                <Button text='Listar Assistidos' onClick={() => {navigate("/assisteds")}}/>
                <Button text='Minhas Evoluções' onClick={() => {navigate(`/evolution/user/${userId}`)}}/>
                
              </div>
            </div>
          </>
          :
          <h1>FAILURE!</h1>
          
        }

        </section>
      </div>
    )
   
}