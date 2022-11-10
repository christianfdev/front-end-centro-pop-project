import './styles.css';
import { useNavigate } from 'react-router-dom'

export function NavBar({ page } : any){

  let navigate = useNavigate();


  return(
    <nav className='navbar'>
    <div className='infoUser'>
      <p>Christian</p>
      <p>Orientador Social</p>
    </div>
    <h1>{page}</h1>
    <div className='option-navbar'>
      <p><a href="centro-pop-site/home" className='link-navbar'>Home</a></p>
      <p><a href="centro-pop-site/" className='link-navbar'>Sair</a></p>
    </div>
  </nav>
  )

}