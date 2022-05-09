import logo from './centropop.png'
import { Component } from 'react'
import './styles.css'

import { InputText } from '../../components/InputText';
import { InputPassword } from '../../components/InputPassword';
import { Button } from '../../components/Button';

export class Home extends Component {


    render() {
        return (
            <div className="Home">
                
                <div className="container">
                    <div className="image-div">
                        <img src={logo} className="Home-logo" alt="logo" />
                    </div>

                    <div className="login">
                        <h1>
                            Faça seu login
                        </h1> 

                        <div className="inputs">
                            <InputText placeholder="Usuário"/>
                            <InputPassword />
                        </div>

                        <div className="buttons">
                            <Button text="Entrar"/>
                        </div>
                        <a href="https://www.google.com.br">Esqueci minha senha</a>
                    </div>
                </div>
            </div>
        )
    } 
}