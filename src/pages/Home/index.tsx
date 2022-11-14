import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home(){

  let navigate = useNavigate();
  let userId = localStorage.getItem('userId');
  const [name, setName] = useState('');
  let token = localStorage.getItem('token');
  let assignment = localStorage.getItem('assignment');


  useEffect(() => {
      api.get(`http://localhost:3000/user/info/${userId}`)
        .then(response => {
          setName(response.data.name);
        })
  })

    return(

      <div className='home'>
        <NavBar page='Página Inicial' assignment={assignment} name={name}/>

        <section className='home-options'>
         
            
        {
          assignment === 'ADMINISTRADOR' ? 
          <>
            <div className='section'>
              <span className='section-title'>Usuários</span>
              <div className='home-buttons'>
                <Button text='Cadastrar Usuário' onClick={() => {navigate("/user")}}/>
                <Button text='Listar Usuários' onClick={() => {navigate(`/users`)}}/>
              </div>
            </div>
          </>
          : assignment === 'ORIENTADOR' ?  
          <>
            <div className='section'>
              <span className='section-title'>POP+</span>
              <div className='home-buttons'>
                <Button text='Novo Cadastro' onClick={() => {navigate("/register")}}/>
                <Button text='Listar Assistidos' onClick={() => {navigate("/assisteds")}}/>
                <Button text='Minhas Evoluções' onClick={() => {navigate(`/evolution/user/${userId}`)}}/>
              </div>
            </div>
          </>
          : assignment === 'ASSISTENTE' ?
          <>
            <div className='section'>
              <span className='section-title'>POP+</span>
              <div className='home-buttons'>
                <Button text='Demandas' onClick={() => {navigate('/demands')}}></Button>
                <Button text='Novo Cadastro' onClick={() => {navigate("/register")}}/>
                <Button text='Listar Assistidos' onClick={() => {navigate("/assisteds")}}/>
                <Button text='Minhas Evoluções' onClick={() => {navigate(`/evolution/user/${userId}`)}}/>
                
              </div>
            </div>
          </>
          :
          <h1>FAILURE!</h1>
          
        }

        </section>
      </div>
    )
   
}