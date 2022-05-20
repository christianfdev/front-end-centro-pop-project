import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';

export function Home(){

  let navigate = useNavigate();

    return(
      <div className='home'>
        <NavBar page='Página Inicial'/>

        <section className='home-options'>
          <div className='section'>
            <span className='section-title'>Minha Atividade</span>
            <div className='home-buttons'>
              <Button text='Meus Cadastros' onClick={ () => {navigate("/assisteds")}}/>
              <Button text='Minhas Evoluções'/>
            </div>
          </div>
          <div className='section'>
            <span className='section-title'>Assistidos</span>
            <div className='home-buttons'>
              <Button text='Novo Cadastro' onClick={ () => {navigate("/register")}}/>
              <Button text='Listar Assistidos' onClick={ () => {navigate("/assisteds")}}/>
              <Button text='Nova Evolução' onClick={ () => {navigate("/new-evolution")}}/>
            </div>
          </div>
        </section>
      </div>
    )
   
}