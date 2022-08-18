import React from 'react'
import { Link } from 'react-router-dom'
import { CardProps } from '../types'
import './card.scss'

const Card: React.FC<CardProps> = ({ name, image, type, id }: CardProps) => {
  return (
    <div className='card__container'>
      <img src={image} alt='product__image' />
      <div className='product__content'>
        <div className='product__info'>
          <h1>{name}</h1>
          <span>{type}</span>
        </div>
        <Link to={`/bicycle/${id}`}>Rent Now</Link>
      </div>
    </div>
  )
}

export default Card
