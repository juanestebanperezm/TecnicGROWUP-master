import { useState, useEffect } from 'react'
import CardList from '../../components/CardList/cardlist-component'
import { CardProps } from '../../components/types'
import './home.scss'

export default function Home() {
  const [bicis, setBicis] = useState<CardProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fecthApi = () => {
    setLoading(true)
    return fetch('https://62fda9c9b9e38585cd54a2ff.mockapi.io/bicis')
      .then((res) => res.json())
      .then((data) => {
        setBicis(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    fecthApi()
  }, [])

  return (
    <section className='section__home'>
      <div className='container'>
        <div className='text-box'>
          <h1>GROWP BYCICLE STORE</h1>
          <h1>GROWP BYCICLE STORE</h1>
        </div>
      </div>
      {!loading ? <CardList bicicles={bicis} /> : <div>Loading...</div>}
    </section>
  )
}
