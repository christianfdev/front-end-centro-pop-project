import { useState } from 'react'
import './styles.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { FormOption } from '../../components/FormOption';
import { NavBar } from '../../components/NavBar';
import axios from 'axios';


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

  const api = axios.create({
    baseURL: "http://localhost:3001",
  });

  async function handleNewAssisted(){
    await api.post('/assisted', 
    {
      name: 'post',
      situation: 'post',
      relactory: 'post'
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }
  
  return(

    
    <div className="register">
    <NavBar page='Cadastro Socioassistencial'/>

      <section className='sectionRegister'>

        <div className='containerRegister'>
          <h1 className='registerTitle'>Dados do Assistido</h1>
          <form className='form-register'>

            <FormOption text='Nome'/>
            <FormOption text='Nome Social/ Apelido'/>
            <span>Filiação</span> 
            <FormOption text='Nome da Mãe'/>
            <FormOption text='Nome do Pai'/>
            <FormOption text='Sexo'/>
            <FormOption text='Data de Nascimento'/>
            <FormOption text='Nacionalidade'/>
            <FormOption text='Número de Telefone/ Celular'/>
            <FormOption text='Cidade em que reside'/>
            <FormOption text='RG'/>
            <FormOption text='Orgão expedidor'/>
            <FormOption text='UF'/>
            <FormOption text='Data de Expedição'/>
            <FormOption text='CPF'/>
            <FormOption text='Reservista'/>
            <FormOption text='Carteira de Trabalho'/>
            <FormOption text='Certidão de Nascimento'/>
            <FormOption text='NIS'/>
            <FormOption text='Recebe algum benefício? Se sim, quais?'/>
            <FormOption text='Situação'/>
            <FormOption text='Escolaridade'/>


            <Button 
              onClick={ () => 
                {
                  handleNewAssisted();
                                  
                }}
              text="Cadastrar"
            />

          </form>
        </div>
      </section>
    </div>
  )
}