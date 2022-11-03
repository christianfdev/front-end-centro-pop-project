import './styles.css';
import { NavBar } from '../../components/NavBar';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { UserInterface } from '../../repositories/UserInterface';
import { UserCard } from '../../components/UserCard';
import { BiSearchAlt } from 'react-icons/bi'

export function ListingUsers () {
  

  const token = localStorage.getItem('access_token')
  const [data, setData] = useState<UserInterface[] | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(token){
      api.get('http://localhost:3001/user', {
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
    <div className='listing-users'>
      <NavBar page='Usuários do Sistema'/>

      <section className='section-user-list'>
      <input className='search-users' type="text" placeholder='Username' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <BiSearchAlt className='icon-users'/>
        {
          data?.map(repo => {
            if(repo.username.includes(search)){
              return (
                <UserCard key={repo.id} name={repo.name} username={repo.username} assignment={repo.assignment} />
              )
            }
          })
        }
      </section>
    </div>
  )

}