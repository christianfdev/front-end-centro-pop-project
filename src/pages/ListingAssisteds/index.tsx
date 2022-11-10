import './styles.css';
import { AssistedCard } from '../../components/AssistedCard';
import { NavBar } from '../../components/NavBar';
import { AssistedInterface } from '../../repositories/AssistedInterface';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { BiSearchAlt } from 'react-icons/bi'


export function ListingAssisteds () {
  

  const token = localStorage.getItem('access_token')
  const [data, setData] = useState<AssistedInterface[] | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(token){
      api.get('/assisted', {
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
        <input className='search' type="text" placeholder='Nome do assistido' value={search} onChange={(e) => setSearch(e.target.value.toUpperCase())}/>
        <BiSearchAlt className='icon'/>
        
        {
          data?.map(repo => {
            if(repo.name.toUpperCase().includes(search)){
              return (
                <AssistedCard key={repo.id} name={repo.name} id={repo.id} />
              )
            }
          })
        }
      </section>
    </div>
  )

}