import './styles.css';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { RelactoryTextArea } from '../../components/TextArea';
import { FormOption } from '../../components/FormOption';
import { NavBar } from '../../components/NavBar';
import { api } from '../../services/api';
import Swal from 'sweetalert2';
import { EvolutionInterface } from '../../repositories/EvolutionInterface';
import { InputDate } from '../../components/InputDate';




export function RegisterEvolution(){

  let navigate = useNavigate();
  let { id: assistedId, evolutionId } = useParams();
  const token = localStorage.getItem('access_token');  

  const [evolution, setEvolution] = useState<EvolutionInterface>({
    data: '',
    description: '',
    assistedId: Number(assistedId),
    demand: {
      name: '',
      status: ''
    },
    userId: 1     // CODAR A PARTE DE RECEBER O ID DO FUNCIONÁRIO PARA REALIZAR O REGISTRO DE UMA NOVA EVOLUÇÃO !!!!!!!!!!
  });



  function handleChange (e: any){
    const value = e.target.value;
    setEvolution({
      ...evolution,
      [e.target.name]: value
    });
  };

  function handleDemandChange (e: any){
    const value = e.target.value;
    setEvolution({
      ...evolution,
      demand:{
        ...evolution.demand,
        [e.target.name]: value
      },
    });
  };
  
  async function handleNewEvolution(e: any){
    e.preventDefault();
    await api.post(`/evolution`, evolution, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {     
     if(response.status){
       Swal.fire({
         icon: 'success',
         text: 'Assisted created succesfully',
         confirmButtonColor: '#58AA93',

       }).then(() => {
         navigate(`/assisted/${assistedId}`)
       })
     } else {
       Swal.fire({
         icon: 'error',
         text: response.data.error
       })
     }
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro durante a tentativa de realizar uma requisição: ' + err
      })
      console.error('Ocorreu um erro durante a tentativa de realizar uma requisição: ' + err);
    });
  }

  async function handleUpdateEvolution(e: any){
    e.preventDefault();
    await api.patch(`/evolution/${evolutionId}`, evolution, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response => {     
     if(response.status){
       Swal.fire({
         icon: 'success',
         text: 'Assisted update succesfully',
         confirmButtonColor: '#58AA93',

       }).then(() => {
         navigate(`/evolution/${assistedId}`)
       })
     } else {
       Swal.fire({
         icon: 'error',
         text: response.data.error
       })
     }
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro durante a tentativa de realizar uma requisição: ' + err
      })
      console.error('Ocorreu um erro durante a tentativa de realizar uma requisição: ' + err);
    });
  }


  return(

    <div className="register-evolution">
    <NavBar page='Cadastro de Evolução'/>

    <section className='section-register-evolution'>

    <div className='container-register-evolution'>
      <h1 className='register-evolution-title'>
        Informações de Registro
      </h1>
      <form className='form-register-evolution' >
        <InputDate labelClass='bold' text='Data' name='data' min='2022-08-01' max='2050-12-01' onChange={handleChange}/>
 
        <FormOption labelClass='bold' text='Demanda' name="name" select={true} form='form-register-evolution' onChange={handleDemandChange} />
        {
          evolution.demand?.name === 'AUXÍLIO' ?
          <div className='div-radio'>
            <label>Status</label>
            <div className='radio-group'>
              <input type="radio" value="PENDENTE" name="status"  onChange={handleDemandChange}/> Pendente
              <input type="radio" value="EM_ANDAMENTO" name="status" onChange={handleDemandChange}/> Em andamento
              <input type="radio" value="CONCLUIDO" name="status" onChange={handleDemandChange}/> Concluído
            </div>
          </div>
          :
          evolution.demand?.name ===  'COBERTOR' ||  evolution.demand?.name === 'MÁSCARA' ?
          <div className='div-radio'>
            <label>Quantidade</label>
            <div className='radio-group'>
              <input type="radio" value="1" name="quantity" onChange={handleDemandChange}/> 01
              <input type="radio" value="2" name="quantity" onChange={handleDemandChange}/> 02
              <input type="radio" value="3" name="quantity" onChange={handleDemandChange}/> 03
              <input type="radio" value="4" name="quantity" onChange={handleDemandChange}/> 04
              <input type="radio" value="5" name="quantity" onChange={handleDemandChange}/> 05
            </div>
          </div>
          :
          null
        }


        <label className='label-register-evolution'>
          Descrição das atividades realizadas
        </label>
        <RelactoryTextArea name='description' onChange={handleChange}/>
        {
          evolutionId ? 
          <Button 
           text="Atualizar Evolução"
           onClick={handleUpdateEvolution}
          />
          :
          <Button 
           text="Cadastrar Evolução"
           onClick={handleNewEvolution}
          />
        }
        

      </form>
    </div>
    </section>
    </div>
  )
}