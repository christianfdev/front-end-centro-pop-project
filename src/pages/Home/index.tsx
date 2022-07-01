import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';

export function Home(){
  let navigate = useNavigate();
  let userId = 1;
  let assignment = localStorage.getItem('assignment');


    return(

      <div className='home'>
        <NavBar page='Página Inicial'/>

        <section className='home-options'>
         
            
        {
          assignment === 'ADMIN' ? 
          <>
            <div className='section'>
              <span className='section-title'>Usuários</span>
              <div className='home-buttons'>
                <Button text='Cadastrar Usuário' onClick={() => {navigate("/assisteds")}}/>
                <Button text='Listar Usuários' onClick={() => {navigate(`/evolution/user/${userId}`)}}/>
              </div>
            </div>
          </>
          : assignment === 'ORIENTADOR' ?  
          <>
            <div className='section'>
              <span className='section-title'>Minha Atividade</span>
              <div className='home-buttons'>
                <Button text='Meus Cadastros' onClick={() => {navigate("/assisteds")}}/>
                <Button text='Minhas Evoluções' onClick={() => {navigate(`/evolution/user/${userId}`)}}/>
              </div>
            </div>
            <div className='section'>
              <span className='section-title'>Assistidos</span>
              <div className='home-buttons'>
                <Button text='Novo Cadastro' onClick={() => {navigate("/register")}}/>
                <Button text='Listar Assistidos' onClick={() => {navigate("/assisteds")}}/>
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