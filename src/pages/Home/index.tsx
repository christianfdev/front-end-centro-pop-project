import './styles.css';
import { Button } from '../../components/Button';

export function Home(){

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
              <Button text='Novo Cadastro'/>
              <Button text='Listar Assistidos'/>
              <Button text='Nova Evolução'/>
              <Button text='Pesquisar Evolução'/>
            </div>
          </div>
        </section>
      </div>
    )
   
}