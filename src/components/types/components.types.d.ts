import { InputHTMLAttributes } from 'react'

interface CardProps {
  id: string
  name: string
  image: string
  type: string
}

interface CardListProps {
  bicicles: CardProps[]
}

interface FormDataProps {
  username: string
  email: string
  phone: string
  startDate: string
  duration: number
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export { CardProps, CardListProps, FormDataProps, InputProps }
