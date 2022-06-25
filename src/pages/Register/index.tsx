import './styles.css';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import Swal from 'sweetalert2';
import { FormOption } from '../../components/FormOption';
import { Button } from '../../components/Button';
import { NavBar } from '../../components/NavBar';
import { AssistedInterface } from '../../repositories/AssistedInterface';
import { RelactoryTextArea } from '../../components/TextArea';



export function Register() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [assisted, setAssisted] = useState<AssistedInterface>(
    {
      name: '',
      situation: '',
      relactory: ''
    }
  );
  const token = localStorage.getItem('access_token')
  

  function handleChange (e: any){
    const value = e.target.value;
    setAssisted({
      ...assisted,
      [e.target.name]: value
    });
  };
  
  async function handleNewAssisted(e: any){
    e.preventDefault();
    await api.post('/assisted', assisted, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      
     if(response.status){
       Swal.fire({
         icon: 'success',
         title: 'Assisted created succesfully',
         confirmButtonColor: '#58AA93',
         customClass: {
           title: 'confirmRegisterTitle'
         }

       }).then(() => {
         navigate('/home')
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

  async function handleUpdateAssisted(e: any){
    e.preventDefault();
    await api.patch(`/assisted/${id}`, assisted, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      
      if(response.status){
        Swal.fire({
          icon: 'success',
          text: 'Assisted update succesfully',
          confirmButtonColor: '#58AA93',
 
        }).then(() => {
          navigate(`/assisted/${id}`)
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

    <div className="register">
    <NavBar page='Cadastro Socioassistencial'/>

      <section className='sectionRegister'>

        <div className='containerRegister'>

          <h1 className='registerTitle'>Dados do Assistido</h1>

          <form className='form-register'>

            <FormOption text='Nome' name="name" onChange={handleChange}/>
            <FormOption text='Nome Social/ Apelido' name="social_name"onChange={handleChange}/>
            <span>Filiação</span> 
            <FormOption text='Nome da Mãe' name="mother_name"onChange={handleChange}/>
            <FormOption text='Nome do Pai' name="father_name" onChange={handleChange}/>
            <FormOption text='Sexo' name="sex" onChange={handleChange}/>
            <FormOption text='Data de Nascimento' name="birth_data" onChange={handleChange}/>
            <FormOption text='Nacionalidade' name="nationality" onChange={handleChange}/>
            <FormOption text='Número de Telefone/ Celular' name="phone_number"onChange={handleChange}/>
            <FormOption text='Cidade em que reside' name="city_residence" onChange={handleChange}/>
            <FormOption text='RG' name="rg" onChange={handleChange}/>
            <FormOption text='Orgão expedidor' name="org_e" onChange={handleChange}/>
            <FormOption text='UF' name="uf" onChange={handleChange}/>
            <FormOption text='Data de Expedição' name="dt_e" onChange={handleChange}/>
            <FormOption text='CPF' name="cpf" onChange={handleChange}/>
            <FormOption text='Reservista' name="reservist" onChange={handleChange}/>
            <FormOption text='Carteira de Trabalho' name="work_wallet" onChange={handleChange}/>
            <FormOption text='Certidão de Nascimento' name="birth_cert" onChange={handleChange}/>
            <FormOption text='NIS' name="nis" onChange={handleChange}/>
            <FormOption text='Recebe algum benefício? Se sim, quais?' name="benefits" onChange={handleChange}/>
            <FormOption text='Situação' name="situation" onChange={handleChange}/>
            <FormOption text='Escolaridade' name="schooling" onChange={handleChange}/>
            <RelactoryTextArea text='Relatório'  name="relactory"  onChange={handleChange}/>

            {
              id ? 
                <Button text={"Atualizar Assistido"} onClick={handleUpdateAssisted}/>
              : 
                <Button text={"Cadastrar Assistido"} onClick={handleNewAssisted}/>
            }
            

          </form>

        </div>

      </section>

    </div>

  )
}