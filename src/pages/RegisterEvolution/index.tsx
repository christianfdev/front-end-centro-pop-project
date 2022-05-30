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




export function RegisterEvolution(){

  let navigate = useNavigate();
  let { assistedId } = useParams();

  
  const [evolution, setEvolution] = useState<EvolutionInterface>({
    data: '',
    description: '',
    assistedId: Number(assistedId),
    functionaryId: 1     // CODAR A PARTE DE RECEBER O ID DO FUNCIONÁRIO PARA REALIZAR O REGISTRO DE UMA NOVA EVOLUÇÃO !!!!!!!!!!
  });



  function handleChange (e: any){
    const value = e.target.value;
    setEvolution({
      ...evolution,
      [e.target.name]: value
    });
  };
  
  async function handleNewEvolution(e: any){
    e.preventDefault();
    await api.post(`/evolution`, evolution)
    .then(response => {
      console.log(response.data)
      
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


  return(

    <div className="register-evolution">
    <NavBar page='Cadastro de Evolução'/>

    <section className='section-register-evolution'>

    <div className='container-register-evolution'>
      <h1 className='register-evolution-title'>
        Informações de Registro
      </h1>
      <form className='form-register-evolution' onSubmit={handleNewEvolution}>
        <FormOption 
          labelClass='bold' 
          text='Data'
          name='data'
          onChange={handleChange}
        />

        <label className='label-register-evolution'>
          Descrição das atividades realizadas
        </label>

        <RelactoryTextArea name='description' onChange={handleChange}/>

        <Button 
           text="Cadastrar Evolução"
        />

      </form>
    </div>
    </section>
    </div>
  )
}