import './styles.css';

export function FormOption({ labelClass, text, value, onChange, name }: any){

  let classLabel = 'form-label ' + labelClass;
  return(
    <>
      <label className={classLabel}>{text}</label>
      <input className='form-input' name={name} type="text" value={value} onChange={onChange} />
    </>

  )
}