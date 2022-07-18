import './styles.css';

function TextArea ({ name, onChange }: any) {
  return (
    <textarea 
    className="textarea"
    name={name}
    onChange={onChange}
    />
  )
}

function RelactoryTextArea ({ text, value, onChange, name }: any){
  return (
    <div className='container-textarea-register'> 
      <label className='label'>{text}</label>
      <textarea className='textarea-register' name={name} value={value} onChange={onChange} />
    </div>
  )
    
}


export { TextArea, RelactoryTextArea }
  
    
 
