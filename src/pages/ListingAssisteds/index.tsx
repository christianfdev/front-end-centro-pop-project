import './styles.css';
import { AssistedCard } from '../../components/AssistedCard';
import { NavBar } from '../../components/NavBar';
import { useFetch } from '../../services/useFetch';
import { AssistedInterface } from '../../repositories/AssistedInterface';


export function ListingAssisteds () {

  const { data: repositories } = useFetch<AssistedInterface[]>('http://localhost:3001/assisted')


  return(
    <div className='listing-assisteds'>
      <NavBar page='Assistidos do Centro POP'/>

      <section className='section-list'>
        {
          repositories?.map(repo => {
            return (
              <AssistedCard key={repo.id} name={repo.name} id={repo.id} />
            )
          })
        }
      </section>
    </div>
  )

}