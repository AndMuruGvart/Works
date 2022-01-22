import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef } from 'react';
import { replyContext } from '../../../Context/replyContext';
import styles from './replyform.css';
import ReactDOM from 'react-dom';


interface IReply {
  onClose?: () => void;
}

export function ReplyForm(this: any, props:IReply) {

  const ref=useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event:MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick) 
    return () => {
      document.removeEventListener('click', handleClick); 
    }
  }, [])
  
  const node = document.querySelector('#answer_root');
  if (!node) return null;

    const {value, onChange}=  useContext(replyContext);

  function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
  }

 
  
  return ReactDOM.createPortal ((
    <div ref={ref}>
      <form className={styles.form} onSubmit={handleSubmit}> 
       <textarea  ref={input => input && input.focus()} className={styles.input} value={value} onChange={handleChange} /> 
       <button type='submit' className={styles.button}>Ответить</button>
    </form>
    </div>
  ), node);
}

