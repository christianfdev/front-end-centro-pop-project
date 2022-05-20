import './styles.css';

export function NavBar({ page } : any){

  return(
    <nav className='navbar'>
    <div className='infoUser'>
      <p>Christian</p>
      <p>Orientador Social</p>
    </div>
    <h1>{page}</h1>
    <div className='sair'>
      <p>Sair</p>
    </div>
  </nav>
  )

}