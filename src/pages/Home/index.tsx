import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Home(){

  let navigate = useNavigate();

    return(
      <div className='home'>
        <nav className='navbar'>
          <div className='infoUser'>
            <p>Christian</p>
            <p>Orientador Social</p>
          </div>

          <div className='sair'>
            <p>Sair</p>
          </div>
        </nav>

        <section className='options'>
          <div className='section'>
            <span className='title'>Minha Atividade</span>
            <div className='buttons'>
              <Button text='Meus Cadastros'/>
              <Button text='Minhas Evoluções'/>
            </div>
          </div>
          <div className='section'>
            <span className='title'>Assistidos</span>
            <div className='buttons'>
              <Button text='Novo Cadastro' onClick={ () => {navigate("/register")}}/>
              <Button text='Listar Assistidos' onClick={ () => {navigate("/assisteds")}}/>
              <Button text='Nova Evolução' onClick={ () => {navigate("/new-evolution")}}/>
            </div>
          </div>
        </section>
      </div>
    )
   
}