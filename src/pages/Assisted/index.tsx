import { useState } from 'react';
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { AssistedInterface } from '../../repositories/AssistedInterface';
import { useFetch } from '../../services/useFetch';


export function Assisted() {

  let { id } = useParams();
  const { data: repo } = useFetch<AssistedInterface>(`http://localhost:3001/assisted/${id}`);

  return(
    
    <div className="assisted">
      <NavBar page='Dados do Assistido'/>

      <section className='sectionAssisted'>

        <div className='containerAssisted'>

          {repo ? 
            <>
            <h1 className='assistedTitle'>{repo?.name}</h1>
            <div className='assistedData'>
              <p><span>Nome:</span>  {repo?.name} </p>
              <p><span>Nome Social/ Apelido:</span> {repo?.social_name} </p>
              <p><span>Mãe:</span>  {repo?.mother_name} </p>
              <p><span>Pai:</span>  {repo?.father_name} </p>
              <p><span>Sexo:</span>  {repo?.sex} </p>
              <p><span>Data de Nascimento:</span>  {repo?.birth_data} </p>
              <p><span>Nacionalidade:</span>  {repo?.nationality} </p>
              <p><span>Telefone/ Celular:</span> {repo?.phone_number} </p>
              <p><span>Reside em: </span>  {repo?.city_residence} </p>
              <p><span>RG: </span>  {repo?.rg} </p>
              <p><span>Orgão Emissor: </span>  {repo?.org_e} </p>
              <p><span>UF: </span>  {repo?.uf} </p>
              <p><span>Data de Emissão: </span>  {repo?.dt_e} </p>
              <p><span>CPF: </span> {repo?.cpf} </p>
              <p><span>Reservista: </span>  {repo?.reservist} </p>
              <p><span>Carteira de Trabalho: </span>  {repo?.work_wallet} </p>
              <p><span>Certidão de Nascimento: </span>  {repo?.birth_cert} </p>
              <p><span>NIS: </span>  {repo?.nis} </p>
              <p><span>Benefícios: </span>  {repo?.benefits} </p>
              <p><span>Situação: </span> {repo?.situation} </p>
              <p><span>Escolaridade: </span>  {repo?.schooling} </p>
              <p className='relatorio'><span>Relatório: </span>  {repo?.relactory} </p>
            </div>
            </>
          :
            <h1 className='assistedTitle'>{"Não existe"}</h1>
          }
        </div>
      </section>
    </div>
  )
}