import React, { useState } from 'react'
import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Register() {

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
    <div className="register">

    <div className='containerRegister'>
      <h1 className='registerTitle'>Cadastro Socioassistencial</h1>
      <form className='form'>

        <label className='label'>
          Nome
        </label>
        <input className='input-register' type="text"/>
        

        <label className='label'>
          Nome Social/ Apelido:
        </label>
        <input className='input-register' type="text"/>

        <span>Filiação</span> 
        <label className='label'>
          Nome da mãe:
        </label>
        <input className='input-register' type="text"/>
        <label className='label'>
          Nome do pai: 
        </label>
        <input className='input-register' type="text"/>


        <Button 
           onClick={ () => {navigate("/home")}}
           text="Cadastrar"
        />

      </form>
    </div>
    </div>
  )
}