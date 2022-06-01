import './styles.css';
import { AssistedCard } from '../../components/AssistedCard';
import { NavBar } from '../../components/NavBar';

import { useFetch } from '../../services/useFetch';
import { EvolutionInterface } from '../../repositories/EvolutionInterface';
import { EvolutionCard } from '../../components/EvolutionCard';
import { useParams } from 'react-router-dom';


export function Evolutions () {

  let { assistedId } = useParams();

  const { data: repositories } = useFetch<EvolutionInterface[]>(`http://localhost:3001/evolution/${assistedId}`)


  return(
    <div className='evolutions'>
      <NavBar page='Evoluções'/>

      <section className='section-evolutions'>
      
        <h1>Carlos Augusto Lopes Spindola</h1>

        {repositories?.map(repo => {
          return (<EvolutionCard  key={repo.id} data={repo.data} description={repo.description}/>)
        })

        }
        
           
      </section>
    </div>
  )

}