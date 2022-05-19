import './styles.css';
import { useNavigate } from 'react-router-dom';

export function ListingAssisteds () {

  let navigate = useNavigate();

  return(
    <div className='home'>
      <nav className='navbar'>
        <div className='infoUser'>
          <p>Christian</p>
          <p>Orientador Social</p>
        </div>
        <h1>Assistidos Centro POP</h1>
        <div className='sair'>
          <p>Sair</p>
        </div>
      </nav>

      <section className='section-assisted'>
       
        <div className='card-assisted'>
          <span className='name'>AURIANA DE OLIVEIRA MELO</span>
          <a onClick={ () => {navigate("/assisted")}} className='more'>+</a>
        </div>

        <div className='card-assisted'>
          <span className='name'>CARLOS AUGUSTO LOPES SPINDOLA</span>
          <a href="" className='more'>+</a>
        </div>

        <div className='card-assisted'>
          <span className='name'>LUCIMAR MATOS FERREIRA</span>
          <a href="" className='more'>+</a>
        </div>
      </section>

      
    </div>
  )

}