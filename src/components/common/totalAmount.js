export default function totalAmount(array) {
  const totalAmount = array.reduce((total, sales) => total + sales.amount, 0)

  return totalAmount
}
