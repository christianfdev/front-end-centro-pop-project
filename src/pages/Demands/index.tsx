import './styles.css';
import { NavBar } from '../../components/NavBar';
import { EvolutionInterface } from '../../repositories/EvolutionInterface';
import { EvolutionCard } from '../../components/EvolutionCard';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

export function Demands () {

  let navigate = useNavigate();
  const token = localStorage.getItem('access_token');
  const [data, setData] = useState<EvolutionInterface[] | null>(null);
  let { assistedId, userId } = useParams();

  useEffect(() => {
      api.get(`/evolution/demands`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(response => {
        setData(response.data)
      })
  }, [])

 
  async function handleDeleteEvolution(id: string){
    Swal.fire({
      title: 'Você tem certeza que deseja deletar tal evolução?',
      showDenyButton: true,
      confirmButtonText: 'Sim, deletar',
      denyButtonText: 'Não, cancelar',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'confirm',
        denyButton: 'order-3',
        title: 'title'
      }
    }).then(async (result) => {
      if(result.isConfirmed){
        await api.delete(`/evolution/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(() => {
          Swal.fire({
            title: 'Dados deletados com sucesso!',
            icon: 'success',
            customClass: {
              title: 'title'
            },
            confirmButtonColor: '#58AA93'
          })

          navigate(0);
        })
      }else if(result.isDenied){
        
        Swal.fire({
          title: 'Evolução excluída!',
          customClass: {
            title: 'title'
          },
          confirmButtonColor: '#58AA93'
        })
      }
    })
    

   /*   */
  }


  return(
    <div className='evolutions'>
      <NavBar page='Evoluções'/>

      <section className='section-evolutions'>
      
        <h1>Demandas - Centro POP</h1>

        {data?.map(repo => {
          return (
            <EvolutionCard  
              key={repo.id} 
              title={repo.assisted?.name.toUpperCase()}
              data={repo.data} 
              demand={repo.demand}
              description={repo.description}
              status={repo.status}
              quantity={repo.quantity}
              assisted={repo.assistedId} 
              id={repo.id}
              isDemand={true}
              del={() => handleDeleteEvolution(String(repo.id))}
            />
          )
        })

        }
        
           
      </section>
    </div>
  )

}