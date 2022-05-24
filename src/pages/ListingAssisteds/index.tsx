import './styles.css';
import { AssistedCard } from '../../components/AssistedCard';
import { NavBar } from '../../components/NavBar';
import { useFetch } from '../../services/useFetch';


type Repository = {
  name: string;
}

export function ListingAssisteds () {

  const { data: repositories } = useFetch<Repository[]>('http://localhost:3001/assisted')


  return(
    <div className='listing-assisteds'>
      <NavBar page='Assistidos do Centro POP'/>

      <section className='section-list'>
        {
          repositories?.map(repo => {
            return (
              <AssistedCard key={repo.name} name={repo.name} />
            )
          })
        }
      </section>

      
    </div>
  )

}