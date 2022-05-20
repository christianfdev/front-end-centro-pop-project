import logo from './centropop.png'
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../components/InputText';
import { InputPassword } from '../../components/InputPassword';
import { Button } from '../../components/Button';

export function Login() {

    let navigate = useNavigate();

    
        return (
            <div className="login">
                
                <div className="login-container">
                    <div className="image-div">
                        <img src={logo} className="login-logo" alt="logo" />
                    </div>

                    <div className="login-form">
                        <h1>
                            Faça seu login
                        </h1> 

                        <div className="login-inputs">
                            <InputText placeholder="Usuário"/>
                            <InputPassword />
                        </div>

                        <div className="login-buttons">
                            <Button 
                                onClick={ () => {navigate("/home")}}
                                text="Entrar"
                            />
                            

                        </div>
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </div>
            </div>
        )
    
}