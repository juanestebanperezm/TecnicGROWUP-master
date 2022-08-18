import React, { useEffect, useState } from 'react'
import { CardProps } from '../../components/types'
import { useParams } from 'react-router-dom'
import { formatDate, CalcBPrice } from '../../utils'
import './bicycle.scss'
import Form from '../../components/Form/form-component'
import { useForm } from '../../components/Form/hooks/useForm'
import Swal from 'sweetalert2'

const INITIAL_STATE = {
  username: '',
  email: '',
  phone: '',
  startDate: formatDate(new Date()),
  duration: 1,
}

const Bicycle = () => {
  const { id } = useParams()

  const [bici, setBici] = useState<CardProps>()

  const sendData = () => {
    const { username, email, phone } = values

    if (username !== '' && email !== '' && phone !== '') {
      Swal.fire({
        title: 'Are You Sure',
        text: `The rent price of your bicycl: ${CalcBPrice(
          formatDate(new Date()),
          bici?.type,
          values.duration,
        )}`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: 'blue',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          const rentData = {
            ...values,
            bicycleId: id,
            bicycleName: bici?.name,
            bicycleType: bici?.type,
          }

          localStorage.setItem('rentData', JSON.stringify(rentData))

          Swal.fire('Rent!', 'Thanks For Your Rent', 'success')
        }
      })
    } else {
      Swal.fire('Error', 'Please, fill all the fields', 'error')
    }
  }

  const { onChange, onSubmit, values } = useForm(sendData, INITIAL_STATE)

  const fecthApi = () => {
    return fetch(`https://62fda9c9b9e38585cd54a2ff.mockapi.io/bicis/${id}`)
      .then((res) => res.json())
      .then((data) => setBici(data))
  }

  useEffect(() => {
    fecthApi()
  }, [])

  return (
    <section className='bicycle__section'>
      <div className='item__container'>
        <img src={bici?.image} />
        <div className='item__info'>
          <h1>{bici?.name}</h1>
          <p>{bici?.type}</p>
        </div>
      </div>
      <div className='form__content'>
        <Form onChange={onChange} onSubmit={onSubmit} values={values} />
      </div>
    </section>
  )
}

export default Bicycle
