import './styles.css';

export function InputDate({ labelClass, text, value, onChange, name, min, max }: any ){

  let classLabel = 'form-label ' + labelClass;
  
  return(
    <>
      <label className={classLabel}>{text}</label>
      {        
        <input className='form-input' name={name} type="date" min={min} max={max} value={value} onChange={onChange} />
      }
    </>
  )
}