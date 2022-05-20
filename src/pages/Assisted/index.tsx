import { useState } from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';

export function Assisted() {

  const [name, setName] = useState('');
  const [socialName, setSocialName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherNamer] = useState('');
  const [sex, setSex] = useState('');
  const [birthData, setBirthData] = useState('');
  const [nationality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cityResidence, setCityResidence] = useState('');
  const [rg, setRg] = useState('');
  const [orgE, setOrgE] = useState('');
  const [uf, setUf] = useState('');
  const [dtE, setDtE] = useState('');
  const [cpf, setCpf] = useState('');
  const [reservist, setReservist] = useState('');
  const [workWallet, setWorkWallet] = useState('');
  const [birthCert, setBirthCert] = useState('');
  const [nis, setNis] = useState('');
  const [benefits, setBenefits] = useState('');
  const [situation, setSituation] = useState('');
  const [schooling, setSchooling] = useState('');
  const [relactory, setRelactory] = useState('');

  let navigate = useNavigate();
  
  return(
    
    <div className="assisted">
      <NavBar page='Dados do Assistido'/>

      <section className='sectionAssisted'>

        <div className='containerAssisted'>

          <h1 className='assistedTitle'>CARLOS AUGUSTO LOPES SPINDOLA</h1>

          <div className='assistedData'>
            <p><span>Nome:</span>  Carlos Augusto Lopes Spindola </p>
            <p><span>Nome Social/ Apelido:</span>  Gastão </p>
            <p><span>Mãe:</span>  Joana Lopes Spindola </p>
            <p><span>Pai:</span>  José Lopes Spindola </p>
            <p><span>Sexo:</span>  Masculino </p>
            <p><span>Data de Nascimento:</span>  19/08/1979 </p>


          </div>


        </div>
      </section>
    </div>
  )
}