import { formatDateProps, padTo2DigitsProps } from './types'

const padTo2Digits: padTo2DigitsProps = (num) => {
  return num.toString().padStart(2, '0')
}

const formatDate: formatDateProps = (date) => {
  return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join(
    '-',
  )
}

const BPrice = (date: string) => {
  const day = parseInt(date.slice(8, 10))

  return day > 15 ? 12 : 10
}

const CalcBPrice = (date: string, type: string | undefined, days: number) => {
  if (type === 'Electric') {
    return BPrice(date) * days
  } else if (type === 'Normal') {
    const leftDays = days - 3

    return BPrice(date) + leftDays * BPrice(date)
  } else {
    const leftDays = days - 5

    return BPrice(date) + leftDays * BPrice(date)
  }
}

export { formatDate, CalcBPrice }
