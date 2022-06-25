import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';

export function Home(){

  let navigate = useNavigate();
  
  // Desenvolver a questão de pegar o id do funcionário
  // Atualmente está com id manualmente setado para realização de testes
  let functionaryId = 1;

    return(
      <div className='home'>
        <NavBar page='Página Inicial'/>

        <section className='home-options'>
          <div className='section'>
            <span className='section-title'>Minha Atividade</span>
            <div className='home-buttons'>
              <Button text='Meus Cadastros' onClick={ () => {navigate("/assisteds")}}/>
              <Button text='Minhas Evoluções' onClick={() => {navigate(`/evolution/functionary/${functionaryId}`)}}/>
            </div>
          </div>
          <div className='section'>
            <span className='section-title'>Assistidos</span>
            <div className='home-buttons'>
              <Button text='Novo Cadastro' onClick={ () => {navigate("/register")}}/>
              <Button text='Listar Assistidos' onClick={ () => {navigate("/assisteds")}}/>
            </div>
          </div>
        </section>
      </div>
    )
   
}