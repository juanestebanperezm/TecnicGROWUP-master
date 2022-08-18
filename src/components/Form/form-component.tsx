import React, { useState } from 'react'
import Input from '../Input/input-component'
import { FormDataProps } from '../types'
import './form.scss'

interface FormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  values: FormDataProps
}

function Form({ onChange, onSubmit, values }: FormProps) {
  const sendData = () => {
    console.log(values)
  }

  return (
    <form className='form__container' onSubmit={onSubmit}>
      <h1>Formulario</h1>
      <Input
        name='username'
        label='UserName'
        placeholder='UserName'
        type='text'
        value={values.username}
        onChange={onChange}
      />
      <Input
        name='email'
        label='Email'
        placeholder='Email'
        type='email'
        value={values.email}
        onChange={onChange}
      />
      <Input
        name='phone'
        label='Phone'
        placeholder='Phone'
        type='tel'
        value={values.phone}
        onChange={onChange}
      />
      <Input
        name='startDate'
        label='Start Date'
        placeholder='Start Date'
        disabled
        type='date'
        value={values.startDate}
        onChange={onChange}
      />
      <Input
        name='duration'
        label='Duration'
        placeholder='Duration'
        type='number'
        value={values.duration}
        onChange={onChange}
        min='1'
      />
      <button type='submit'>Send Information</button>
    </form>
  )
}

export default Form
