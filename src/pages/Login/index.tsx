import logo from './centropop.png'
import React from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/InputText';
import { InputPassword } from '../../components/InputPassword';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { api } from '../../services/api';
import Swal from 'sweetalert2';

type loginInterface = {
    username: string,
    password: string
}

export function Login() {

    const [data, setData] = useState<loginInterface>({
        username: '',
        password: ''
    });


    let navigate = useNavigate();

    function handleChange (e: any){
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };



    async function handleLogin(e: any){

        e.preventDefault();
        await api.post('/login', data)
        .then(response => {
            if(response.status){
              Swal.fire({
                icon: 'success',
                title: 'Login executed succesfully',
                confirmButtonColor: '#58AA93',
                customClass: {
                  title: 'confirmLoginTitle'
                }
       
              }).then(async () => {
                localStorage.setItem('access_token', response.data.access_token);
                await api.get('/me', {
                    headers: {
                      Authorization: `Bearer ${response.data.access_token}`,
                    }
                  })
                  .then(response => {
                    localStorage.setItem('assignment', response.data.assignment);
                    localStorage.setItem('userId', response.data.id);
                    }
                  )
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
               text: 'Usuário e/ou senha incorretos '
             })
             console.error('Ocorreu um erro durante a tentativa de realizar uma requisição: ' + err);
           });


    }
    
        return (
            <div className="login">
                
                <div className="login-container">
                    <div className="image-div">
                        <img src={logo} className="login-logo" alt="logo" />
                    </div>

                    <div className="login-form">
                        <form action="">
                            <h1>
                                Faça seu login
                            </h1> 

                            <div className="login-inputs">
                                <InputText placeholder="Usuário" name='username' onChange={handleChange}/>
                                <InputPassword name='password' onChange={handleChange}/>
                            </div>

                            <div className="login-buttons">
                                <Button 
                                    onClick={handleLogin}
                                    text="Entrar"
                                />
                                
                            </div>
                        <a href="#">Esqueci minha senha</a>

                        </form>
                        
                    </div>
                </div>
            </div>
        )
    
}