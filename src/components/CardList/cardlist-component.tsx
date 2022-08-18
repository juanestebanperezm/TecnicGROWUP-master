import React from 'react'
import { CardListProps } from '../types'
import Card from '../Card/card-component'
import './cardlist.scss'

const CardList: React.FC<CardListProps> = ({ bicicles }: CardListProps) => {
  return (
    <div className='cardlist__container'>
      {bicicles.map((bicycle) => {
        return (
          <Card
            key={bicycle.id}
            id={bicycle.id}
            name={bicycle.name}
            type={bicycle.type}
            image={bicycle.image}
          />
        )
      })}
    </div>
  )
}

export default CardList
