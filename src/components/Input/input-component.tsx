import React from 'react'
import { InputProps } from '../types'
import './input.scss'

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className='input__container'>
      <label htmlFor={name}>{label}</label>
      <input type='text' id={name} name={name} {...rest} />
    </div>
  )
}

export default Input
