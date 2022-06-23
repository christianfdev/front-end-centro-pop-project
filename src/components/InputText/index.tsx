import './styles.css';

export const InputText = ({ placeholder, onChange, name }: any) => (
  <input 
        className="input"
        type="text" 
        name={name}
        placeholder={placeholder} 
        onChange={onChange}
  />
)
  
    
 
