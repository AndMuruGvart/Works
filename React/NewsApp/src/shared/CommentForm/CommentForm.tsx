import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import styles from './commentform.css';
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  commentForm: string;
};


export function CommentForm() {

  // const [value, setValue]=useState('');
  // const [touched, setTouched]=useState(false);
  // const [valueError, setValueError]=useState('');

  // function handleSubmit(event:FormEvent) {
  //   event.preventDefault();
  //   setTouched(true);

  //   setValueError(validateValue())

  //   const isFormValid=!validateValue();
  //   if (!isFormValid) return;

  //   alert('Форма отправлена')
  // }

  // function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(event.target.value);
  // }


  // function validateValue() {
  //   if (value.length<=3) return 'Введите больше трех символов';
  //   return '';
  // }


  // return (
  //   <form className={styles.form} onSubmit={handleSubmit}> 
  //      <textarea
  //          className={styles.input}
  //          value={value}
  //          onChange={handleChange}
  //          aria-invalid={valueError ? 'true': undefined}/> 
  //         {touched && valueError && (<div>{validateValue()}</div>)}
  //      <button type='submit' className={styles.button} >Комментировать</button>
  //   </form>
  // );




  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) =>  alert(JSON.stringify(data));

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea className={styles.input} {...register(
            'commentForm', { required: true, minLength: { value: 4, message: 'Введите больше трех символов'}}
          )}
          onChange={(event:ChangeEvent<HTMLTextAreaElement>) => {
            const text=event.target.value;
            setValue("commentForm", text);
          }}
          aria-invalid={errors.commentForm ? 'true': undefined}
          />
          
           {errors.commentForm && (<div>{'Введите больше трех символов'}</div>)};

      <button type="submit"

      className={styles.button}>
        Комментировать
      </button>
    </form>
  );


 
}
