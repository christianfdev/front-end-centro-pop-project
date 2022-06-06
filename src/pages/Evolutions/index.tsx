import './styles.css';
import { NavBar } from '../../components/NavBar';
import { EvolutionInterface } from '../../repositories/EvolutionInterface';
import { EvolutionCard } from '../../components/EvolutionCard';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

export function Evolutions () {
  let navigate = useNavigate();
  const [data, setData] = useState<EvolutionInterface[] | null>(null);
  let { assistedId, functionaryId } = useParams();

  useEffect(() => {
    if(assistedId){
      api.get(`/evolution/assisted/${assistedId}`)
      .then(response => {
        setData(response.data)
      })
    }else if(functionaryId){
      api.get(`/evolution/functionary/${functionaryId}`)
      .then(response => {
        setData(response.data)
      })
    }
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
        await api.delete(`/evolution/${id}`)
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
      
        <h1>Carlos Augusto Lopes Spindola</h1>

        {data?.map(repo => {
          return (<EvolutionCard  key={repo.id} data={repo.data} description={repo.description} assisted={assistedId} id={repo.id} del={() => handleDeleteEvolution(String(repo.id))}/>)
        })

        }
        
           
      </section>
    </div>
  )

}