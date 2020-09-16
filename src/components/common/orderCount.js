export default function orderCount(customers) {
  const phone = customers.map((customer) => customer.phone)
  const orderFrequency = phone.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  )
  const orderedOnce = Object.values(orderFrequency).filter(
    (order) => order === 1
  ).length
  const orderedTwice = Object.values(orderFrequency).filter(
    (order) => order === 2
  ).length
  const orderedThrice = Object.values(orderFrequency).filter(
    (order) => order === 3
  ).length
  const orderedFourTimes = Object.values(orderFrequency).filter(
    (order) => order === 4
  ).length
  const orderedFiveTimes =
    Object.values(orderFrequency).length -
    (orderedOnce + orderedTwice + orderedThrice + orderedFourTimes)

  const orderData = {
    orderedOnce,
    orderedTwice,
    orderedThrice,
    orderedFourTimes,
    orderedFiveTimes,
  }

  return orderData
}
