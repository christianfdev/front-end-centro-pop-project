import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function RegisterEvolution(){

  let navigate = useNavigate();

  return(

    
    <div className="register">
    <nav className='navbar'>
        <div className='infoUser'>
          <p>Christian</p>
          <p>Orientador Social</p>
        </div>
        <h1>Cadastro de Evolução</h1>
        <div className='sair'>
          <p>Sair</p>
        </div>
    </nav>

    <section className='sectionRegisterEvolution'>

    <div className='containerRegisterEvolution'>
      <h1 className='registerTitle'>Informações de Registro</h1>
      <form className='form'>

        <label className='label-evolution'>
          Data
        </label>
        <input className='input-register' type="text"/>
        

        <label className='label-evolution'>
          Descrição das atividades realizadas
        </label>
        <textarea className='textarea' />

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