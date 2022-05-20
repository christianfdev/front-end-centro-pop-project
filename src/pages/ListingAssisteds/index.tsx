import './styles.css';
import { useNavigate } from 'react-router-dom';
import { AssistedCard } from '../../components/AssistedCard';
import { NavBar } from '../../components/NavBar';

export function ListingAssisteds () {

  let navigate = useNavigate();

  return(
    <div className='listing-assisteds'>
      <NavBar page='Assistidos do Centro POP'/>

      <section className='section-list'>
        <AssistedCard name='AURIANA DE OLIVEIRA MELO' />
        <AssistedCard name='CARLOS AUGUSTO LOPES SPINDOLA' />
        <AssistedCard name='LUCIMAR MATOS FERREIRA' />
      </section>

      
    </div>
  )

}