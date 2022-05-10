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
            <Button text='Novo Cadastro'/>
            <Button text='Listar Assistidos'/>
            <Button text='Meus Cadastros'/>
          </div>
          <div className='section'>
            <Button text='Nova Evolução'/>
            <Button text='Pesquisar Evolução'/>
            <Button text='Minhas Evoluções'/>
          </div>
        </section>
      </div>
    )
   
}