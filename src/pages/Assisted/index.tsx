import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { AssistedInterface } from '../../repositories/AssistedInterface';
import { useFetch } from '../../services/useFetch';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import  Swal  from 'sweetalert2';


export function Assisted() {

  let { id } = useParams();
  let navigate = useNavigate();
  const { data: repo } = useFetch<AssistedInterface>(`http://localhost:3001/assisted/${id}`);


  async function handleDeleteAssisted(assistedId: string){
    Swal.fire({
      title: 'Você tem certeza que deseja deletar os dados desse assistido?',
      showDenyButton: true,
      confirmButtonText: 'Sim, deletar',
      denyButtonText: 'Não, cancelar',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'confirm',
        denyButton: 'order-3',
        title: 'title'
      }
    }).then(async (result) => {
      if(result.isConfirmed){
        await api.delete(assistedId)
        .then(() => {
          Swal.fire({
            title: 'Dados deletados com sucesso!',
            icon: 'success',
            customClass: {
              title: 'title'
            },
            confirmButtonColor: '#58AA93'
          })

          navigate('/home');
        })
      }else if(result.isDenied){
        
        Swal.fire({
          title: 'Assistido excluído!',
          customClass: {
            title: 'title'
          },
          confirmButtonColor: '#58AA93'
        })
      }
    })
    

   /*   */
  }

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
              <div className='assisted-buttons'>

                <Button text='Nova Evolução' onClick={ () => {navigate(`/new-evolution/${id}`)}}/>
                <Button text='Evoluções' onClick={ () => {navigate(`/evolution/${id}`)}}/>
                <Button text='Atualizar Informações' onClick={ () => {navigate(`/register/${id}`)}}/>
                <Button text='Deletar Cadastro' onClick={() => handleDeleteAssisted(`/assisted/${id}`)}/>

              </div>
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