import React, { useState } from 'react'
import './styles.css';

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
  
  return(
    <div className='container'>
      <h1>Cadastro Socioassistencial</h1>
      <form className='form'>

        <label className='label'>
          Nome
        </label>
        <input className='input' type="text"/>
        

        <label className='label'>
          Nome Social/ Apelido:
          <input type="text"/>
        </label>
        <span>Filiação</span> 
        <label>
          Nome da mãe:
          <input type="text" placeholder=''/>
        </label>
        <label>
          Nome do pai: 
          <input type="text" placeholder=''/>
        </label>



        <button type='submit' onSubmit={() => console.log('s')}>Cadastrar</button>


      </form>
    </div>
  )
}