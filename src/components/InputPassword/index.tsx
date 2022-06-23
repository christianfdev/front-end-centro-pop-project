import './styles.css';

export const InputPassword = ({ name, onChange }: any) => (
  <input 
        className="input"
        type="password" 
        placeholder="Senha" 
        name={name}
        onChange={onChange}
  />
)
  
    
 
