import './styles.css';

export function FormOption({ labelClass, text }: any){

  let classLabel = 'form-label ' + labelClass;
  return(
    <>
      <label className={classLabel}>{text}</label>
      <input className={'form-input'} type="text" />
    </>

  )
}