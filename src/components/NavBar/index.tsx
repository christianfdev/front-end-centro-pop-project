import './styles.css';

export function NavBar({ page, name, assignment } : any){

  
  return(
    <nav className='navbar'>
    <div className='infoUser'>
      <p>{name}</p>
      <p>{assignment.toLowerCase()}</p>
    </div>
    <h1>{page}</h1>
    <div className='option-navbar'>
      <p><a href="./#/home" className='link-navbar'>Home</a></p>
      <p><a href="./" className='link-navbar'>Sair</a></p>
    </div>
  </nav>
  )

}