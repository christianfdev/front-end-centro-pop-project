import './styles.css';
import { AssistedCard } from '../../components/AssistedCard';
import { NavBar } from '../../components/NavBar';
import { AssistedInterface } from '../../repositories/AssistedInterface';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function ListingAssisteds () {
  

  const token = localStorage.getItem('access_token')
  const [data, setData] = useState<AssistedInterface[] | null>(null);

  useEffect(() => {
    if(token){
      api.get('http://localhost:3001/assisted', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setData(response.data)
        })
    }
  }, [])


  return(
    <div className='listing-assisteds'>
      <NavBar page='Assistidos do Centro POP'/>

      <section className='section-list'>
        {
          data?.map(repo => {
            return (
              <AssistedCard key={repo.id} name={repo.name} id={repo.id} />
            )
          })
        }
      </section>
    </div>
  )

}