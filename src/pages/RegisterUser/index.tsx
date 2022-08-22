import './styles.css';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import Swal from 'sweetalert2';
import { FormOption } from '../../components/FormOption';
import { Button } from '../../components/Button';
import { NavBar } from '../../components/NavBar';
import { RelactoryTextArea } from '../../components/TextArea';
import { UserInterface } from '../../repositories/UserInterface';



export function RegisterUser() {

  let navigate = useNavigate();
  const [user, setUser] = useState<UserInterface>(
    {
      username: '',
      password: '',
      name: '',
      cpf: '',
      assignment: ''
    }
  );

  const token = localStorage.getItem('access_token')
  

  function handleChange (e: any){
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    });
  };
  
  async function handleNewUser(e: any){
    e.preventDefault();
    await api.post('/user', user, {
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

  /*
  async function handleUpdateUser(e: any){
    e.preventDefault();
    await api.patch(`/user/${id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      
      if(response.status){
        Swal.fire({
          icon: 'success',
          text: 'User update succesfully',
          confirmButtonColor: '#58AA93',
 
        }).then(() => {
          navigate(`/user/${id}`)
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
  */
  
  
  
  return(

    <div className="register">
    <NavBar page='Cadastro Socioassistencial'/>

      <section className='sectionRegister'>

        <div className='containerRegister'>

          <h1 className='registerTitle'>Dados do Assistido</h1>

          <form className='form-register'>

            <FormOption text='Username' name="username" onChange={handleChange}/>
            <FormOption text='Senha' name="password"onChange={handleChange}/>
            <FormOption text='Nome' name="name"onChange={handleChange}/>
            <FormOption text='CPF' name="cpf" onChange={handleChange}/>
            <FormOption text='Assignment' name="assignment" onChange={handleChange}/>
            <Button text={"Cadastrar Assistido"} onClick={handleNewUser}/>
            

          </form>

        </div>

      </section>

    </div>

  )
}