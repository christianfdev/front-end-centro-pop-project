import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { TextArea } from '../../components/TextArea';
import { FormOption } from '../../components/FormOption';
import { NavBar } from '../../components/NavBar';

export function RegisterEvolution(){

  let navigate = useNavigate();

  return(

    <div className="register-evolution">
    <NavBar page='Cadastro de Evolução'/>

    <section className='section-register-evolution'>

    <div className='container-register-evolution'>
      <h1 className='register-evolution-title'>
        Informações de Registro
      </h1>
      <form className='form-register-evolution'>
        <FormOption 
          labelClass='bold' 
          text='Data'
        />

        <label className='label-register-evolution'>
          Descrição das atividades realizadas
        </label>

        <TextArea />

        <Button 
           onClick={ () => {navigate("/home")}}
           text="Cadastrar Evolução"
        />

      </form>
    </div>
    </section>
    </div>
  )
}