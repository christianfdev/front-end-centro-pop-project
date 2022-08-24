import './styles.css';

export function FormOption({ labelClass, text, value, onChange, name, type="text", select=false, formId  }: any ){

  let classLabel = 'form-label ' + labelClass;
  let values = ['ADMINISTRADOR', 'ORIENTADOR', 'ASSISTENTE']

  return(
    <>
      <label className={classLabel}>{text}</label>
      {
        select ? 
        <select className='form-input' name={name} onChange={onChange} form={formId}>
          {
            values.map(optionValue => {
              return (
                <option key={optionValue} value={optionValue} >{optionValue}</option>
              )
            })
          }
          
        </select>
        :
        <input className='form-input' name={name} type={type} value={value} onChange={onChange} />
      }
    </>
  )
}